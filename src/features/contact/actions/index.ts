"use server";

import { z } from "zod";
import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

// Schéma de validation Zod
const ContactSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  phone: z.string().min(1, "Le téléphone est requis"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(1, "Le message est requis"),
  "g-recaptcha-response": z.string().min(1, "Merci de valider le reCAPTCHA"),
});

const resend =
  process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.length > 0
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const CONTACT_FROM = process.env.RESEND_FROM_EMAIL;
const CONTACT_TO = process.env.CONTACT_RECIPIENT_EMAIL;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export async function sendContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Validation avec Zod
  const validatedFields = ContactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    "g-recaptcha-response": formData.get("g-recaptcha-response"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    // Retourne le premier message d'erreur trouvé
    const firstError = Object.values(fieldErrors).flat()[0] || "Données invalides";
    return {
      status: "error",
      message: firstError,
      fieldErrors: fieldErrors as Record<string, string[]>,
    };
  }

  const { firstName, lastName, phone, email, message } = validatedFields.data;
  const recaptchaToken = validatedFields.data["g-recaptcha-response"];

  if (!RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY manquant.");
    return {
      status: "error",
      message: "Verification anti-spam indisponible.",
    };
  }

  try {
    const verifyResponse = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
      cache: "no-store",
    });

    const verificationResult = (await verifyResponse.json()) as { success: boolean; score?: number };
    if (!verificationResult.success) {
      console.warn("Verification reCAPTCHA echouee", verificationResult);
      return {
        status: "error",
        message: "La verification reCAPTCHA a echoue. Merci de reessayer.",
      };
    }
  } catch (error) {
    console.error("Impossible de verifier reCAPTCHA", error);
    return {
      status: "error",
      message: "Erreur lors de la verification reCAPTCHA.",
    };
  }

  if (!resend || !CONTACT_FROM || !CONTACT_TO) {
    console.error("Resend ou les adresses CONTACT_* ne sont pas configurees.");
    return {
      status: "error",
      message: "Configuration email manquante. Verifiez RESEND_API_KEY/EMAIL.",
    };
  }

  try {
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `Site Web - Nouveau message de ${fullName}`;
    const currentDate = new Date().toLocaleString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Rendu des templates HTML
    const { render } = await import("@react-email/render");
    const { ContactEmail } = await import("../emails/ContactEmail");
    const { ClientConfirmationEmail } = await import("../emails/ClientConfirmationEmail");

    // 1. Email Admin (Notification)
    const adminHtml = await render(
      ContactEmail({
        fullName,
        email,
        phone,
        message,
        date: currentDate,
      })
    );

    const replyToHeader = `${fullName} <${email}>`;

    // Version texte pour Admin
    const adminText = [
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "💬 NOUVEAU MESSAGE - Site Web",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      `📅 Date: ${currentDate}`,
      "",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "👤 INFORMATIONS DU CONTACT",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      `Nom complet: ${fullName}`,
      `Email: ${email}`,
      `Téléphone: ${phone}`,
      "",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "💭 MESSAGE",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      message,
    ].join("\n");

    // 2. Email Client (Confirmation)
    const clientHtml = await render(
      ClientConfirmationEmail({
        firstName,
        message,
      })
    );

    const clientText = `Bonjour ${firstName},\n\nMerci pour votre message. Je l'ai bien reçu et je reviens vers vous sous 24h.\n\nVotre message :\n${message}\n\nCordialement,\nOmar El Koujouk`;

    // Envoi en parallèle
    await Promise.all([
      // Envoi Admin
      resend.emails.send({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        subject,
        replyTo: replyToHeader,
        text: adminText,
        html: adminHtml,
      }),
      // Envoi Client (Confirmation)
      resend.emails.send({
        from: CONTACT_FROM,
        to: email, // L'adresse du client
        subject: "Message bien reçu ! 🚀 - Omar El Koujouk",
        text: clientText,
        html: clientHtml,
      })
    ]);

    return {
      status: "success",
      message: "Merci ! Votre message a bien ete envoye.",
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    return {
      status: "error",
      message: "Impossible d'envoyer le message pour le moment.",
    };
  }
}
