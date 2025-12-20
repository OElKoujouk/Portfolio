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
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export async function sendContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = (formData.get("firstName") ?? "").toString().trim();
  const lastName = (formData.get("lastName") ?? "").toString().trim();
  const phone = (formData.get("phone") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();
  const recaptchaToken = (formData.get("g-recaptcha-response") ?? "").toString().trim();

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

  if (!recaptchaToken) {
    return {
      status: "error",
      message: "Merci de valider le reCAPTCHA."
    };
  }

  if (!RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY manquant.");
    return {
      status: "error",
      message: "Verification anti-spam indisponible."
    };
  }

  try {
    const verifyResponse = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: recaptchaToken
      }),
      cache: "no-store"
    });

    const verificationResult = (await verifyResponse.json()) as { success: boolean; score?: number };
    if (!verificationResult.success) {
      console.warn("Verification reCAPTCHA echouee", verificationResult);
      return {
        status: "error",
        message: "La verification reCAPTCHA a echoue. Merci de reessayer."
      };
    }
  } catch (error) {
    console.error("Impossible de verifier reCAPTCHA", error);
    return {
      status: "error",
      message: "Erreur lors de la verification reCAPTCHA."
    };
  }

  if (!resend || !CONTACT_FROM || !CONTACT_TO) {
    console.error("Resend ou les adresses CONTACT_* ne sont pas configurees.");
    return {
      status: "error",
      message: "Configuration email manquante. Verifiez RESEND_API_KEY/EMAIL."
    };
  }

  try {
    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `Portfolio - Nouveau message de ${fullName}`;
    const currentDate = new Date().toLocaleString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    
    // Échapper le HTML pour éviter les injections XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background:#0b0c19;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
        <table role="presentation" style="width:100%;background:linear-gradient(135deg,#0b0c19 0%,#16182f 100%);padding:40px 20px;min-height:100vh;">
          <tr>
            <td align="center">
              <table role="presentation" style="max-width:600px;width:100%;margin:0 auto;background:linear-gradient(145deg,#16182f,#1f2242);border-radius:24px;padding:0;color:#f5f5f5;box-shadow:0 25px 60px rgba(5,6,15,0.8),0 0 0 1px rgba(156,196,255,0.1);border:1px solid rgba(156,196,255,0.15);overflow:hidden;">
                
                <!-- Header avec effet néon -->
                <tr>
                  <td style="background:linear-gradient(135deg,rgba(156,196,255,0.15) 0%,rgba(139,92,246,0.15) 100%);padding:32px 40px;border-bottom:1px solid rgba(156,196,255,0.2);">
                    <table role="presentation" style="width:100%;">
                      <tr>
                        <td>
                          <h1 style="margin:0;font-size:24px;font-weight:700;color:#9cc4ff;text-shadow:0 0 20px rgba(156,196,255,0.5);letter-spacing:-0.5px;">
                            💬 Nouveau message
                          </h1>
                          <p style="margin:8px 0 0 0;font-size:13px;color:rgba(255,255,255,0.6);font-weight:400;">
                            ${currentDate}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Informations du contact -->
                <tr>
                  <td style="padding:32px 40px;">
                    <table role="presentation" style="width:100%;border-collapse:separate;border-spacing:0;">
                      
                      <!-- Nom complet -->
                      <tr>
                        <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
                          <table role="presentation" style="width:100%;">
                            <tr>
                              <td style="width:40px;vertical-align:top;">
                                <div style="width:32px;height:32px;background:linear-gradient(135deg,rgba(156,196,255,0.2),rgba(139,92,246,0.2));border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(156,196,255,0.3);">
                                  <span style="font-size:16px;">👤</span>
                                </div>
                              </td>
                              <td style="padding-left:16px;vertical-align:middle;">
                                <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);font-weight:600;margin-bottom:4px;">
                                  Nom complet
                                </div>
                                <div style="font-size:16px;color:#ffffff;font-weight:600;word-break:break-word;">
                                  ${escapeHtml(fullName)}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr>
                        <td style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
                          <table role="presentation" style="width:100%;">
                            <tr>
                              <td style="width:40px;vertical-align:top;">
                                <div style="width:32px;height:32px;background:linear-gradient(135deg,rgba(156,196,255,0.2),rgba(139,92,246,0.2));border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(156,196,255,0.3);">
                                  <span style="font-size:16px;">📧</span>
                                </div>
                              </td>
                              <td style="padding-left:16px;vertical-align:middle;">
                                <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);font-weight:600;margin-bottom:4px;">
                                  Email
                                </div>
                                <div style="font-size:15px;color:#9cc4ff;font-weight:500;word-break:break-word;">
                                  <a href="mailto:${escapeHtml(email)}" style="color:#9cc4ff;text-decoration:none;transition:color 0.2s;">${escapeHtml(email)}</a>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Téléphone -->
                      <tr>
                        <td style="padding:16px 0;">
                          <table role="presentation" style="width:100%;">
                            <tr>
                              <td style="width:40px;vertical-align:top;">
                                <div style="width:32px;height:32px;background:linear-gradient(135deg,rgba(156,196,255,0.2),rgba(139,92,246,0.2));border-radius:8px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(156,196,255,0.3);">
                                  <span style="font-size:16px;">📱</span>
                                </div>
                              </td>
                              <td style="padding-left:16px;vertical-align:middle;">
                                <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);font-weight:600;margin-bottom:4px;">
                                  Téléphone
                                </div>
                                <div style="font-size:15px;color:#ffffff;font-weight:500;word-break:break-word;">
                                  <a href="tel:${escapeHtml(phone.replace(/\s/g, ""))}" style="color:#ffffff;text-decoration:none;">${escapeHtml(phone)}</a>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:0 40px 32px 40px;">
                    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(156,196,255,0.15);border-radius:16px;padding:24px;box-shadow:inset 0 2px 8px rgba(0,0,0,0.3),0 0 20px rgba(156,196,255,0.1);">
                      <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);font-weight:600;margin-bottom:12px;display:flex;align-items:center;gap:8px;">
                        <span>💭</span>
                        <span>Message</span>
                      </div>
                      <div style="font-size:15px;line-height:1.7;color:#f1f3ff;white-space:pre-wrap;word-wrap:break-word;">
                        ${escapeHtml(message).replace(/\n/g, "<br/>")}
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:rgba(0,0,0,0.2);padding:24px 40px;border-top:1px solid rgba(156,196,255,0.1);">
                    <table role="presentation" style="width:100%;">
                      <tr>
                        <td style="text-align:center;">
                          <p style="margin:0 0 12px 0;font-size:13px;color:rgba(255,255,255,0.7);line-height:1.6;">
                            Vous pouvez répondre directement à cet email pour poursuivre la conversation.
                          </p>
                          <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(156,196,255,0.6);font-weight:500;">
                            Portfolio Omar El Koujouk
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const replyToHeader = `${fullName} <${email}>`;

    const textVersion = [
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "💬 NOUVEAU MESSAGE - Portfolio",
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
      "",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "Vous pouvez répondre directement à cet email pour poursuivre la conversation.",
      "",
      "Portfolio Omar El Koujouk"
    ].join("\n");

    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      replyTo: replyToHeader,
      text: textVersion,
      html
    });

    return {
      status: "success",
      message: "Merci ! Votre message a bien ete envoye."
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    return {
      status: "error",
      message: "Impossible d'envoyer le message pour le moment."
    };
  }
}
