"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const resend =
  process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.length > 0
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const CONTACT_FROM = process.env.RESEND_FROM_EMAIL;
const CONTACT_TO = process.env.CONTACT_RECIPIENT_EMAIL;

export async function sendContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = (formData.get("firstName") ?? "").toString().trim();
  const lastName = (formData.get("lastName") ?? "").toString().trim();
  const phone = (formData.get("phone") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();

  if (!firstName || !lastName || !email || !message || !phone) {
    return {
      status: "error",
      message: "Merci de remplir tous les champs requis."
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Adresse email invalide."
    };
  }

  if (!resend || !CONTACT_FROM || !CONTACT_TO) {
    console.error("Resend n'est pas configuré correctement.");
    return {
      status: "error",
      message:
        "Configuration email manquante. Vérifiez RESEND_API_KEY, RESEND_FROM_EMAIL et CONTACT_RECIPIENT_EMAIL."
    };
  }

  try {
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `✨ Nouveau message – ${fullName}`;
    const html = `
      <table style="width:100%;background:#0b0c19;padding:32px 0;font-family:Inter,Arial,sans-serif;">
        <tr>
          <td align="center">
            <table style="max-width:560px;width:100%;margin:0 auto;background:linear-gradient(145deg,#16182f,#1f2242);border-radius:28px;padding:40px 44px;color:#f5f5f5;box-shadow:0 25px 60px rgba(5,6,15,0.65);border:1px solid rgba(255,255,255,0.08);">
              <tr>
                <td style="font-size:22px;font-weight:600;color:#9cc4ff;">
                  Portfolio — Nouveau message
                </td>
              </tr>
              <tr>
                <td style="padding-top:28px;">
                  <table style="width:100%;border-collapse:separate;border-spacing:0 12px;font-size:14px;">
                    <tr>
                      <td style="width:80px;color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1.5px;font-size:11px;">
                        Nom
                      </td>
                      <td style="color:#ffffff;font-weight:500;">${fullName}</td>
                    </tr>
                    <tr>
                      <td style="color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1.5px;font-size:11px;">
                        Email
                      </td>
                      <td style="color:#ffffff;font-weight:500;">${email}</td>
                    </tr>
                    <tr>
                      <td style="color:rgba(255,255,255,0.7);text-transform:uppercase;letter-spacing:1.5px;font-size:11px;">
                        Téléphone
                      </td>
                      <td style="color:#ffffff;font-weight:500;">${phone}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top:12px;">
                  <div style="font-size:14px;line-height:1.8;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:18px;padding:24px;color:#f1f3ff;box-shadow:0 15px 35px rgba(6,7,15,0.45);">
                    ${message.replace(/\n/g, "<br/>")}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-top:30px;font-size:12px;color:rgba(255,255,255,0.65);">
                  Vous pouvez répondre directement à cet email pour poursuivre la conversation.
                </td>
              </tr>
              <tr>
                <td style="padding-top:16px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#787fa9;">
                  Portfolio Omar El Koujouk
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

    const replyToHeader = `${fullName} <${email}>`;

    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      reply_to: [{ email, name: fullName }],
      text: [
        subject,
        "",
        `Nom: ${fullName}`,
        `Email: ${email}`,
        `Téléphone: ${phone}`,
        "",
        message
      ].join("\n"),
      html,
      headers: {
        "X-Entity-Ref-ID": `portfolio-contact-${Date.now()}`,
        "Reply-To": replyToHeader
      }
    });

    return {
      status: "success",
      message: "Merci ! Votre message a bien été envoyé."
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    return {
      status: "error",
      message: "Impossible d'envoyer le message pour le moment."
    };
  }
}
