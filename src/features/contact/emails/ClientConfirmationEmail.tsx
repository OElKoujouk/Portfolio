import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Column,
    Row,
    Link,
} from "@react-email/components";
import * as React from "react";

interface ClientConfirmationEmailProps {
    firstName: string;
    message: string;
}

export const ClientConfirmationEmail = ({
    firstName,
    message,
}: ClientConfirmationEmailProps) => {
    return (
        <Html lang="fr">
            <Head />
            <Preview>J'ai bien reçu votre message - Omar El Koujouk</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Row>
                            <Column>
                                <Heading style={heading}>Message bien reçu ! 🚀</Heading>
                                <Text style={subHeading}>Merci de m'avoir contacté.</Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Body Content */}
                    <Section style={contentContainer}>
                        <Text style={greeting}>Bonjour {firstName},</Text>
                        <Text style={paragraph}>
                            Merci pour votre message. Je l'ai bien reçu et je vais prendre le temps de le lire attentivement.
                        </Text>
                        <Text style={paragraph}>
                            Je m'efforce de répondre à toutes les demandes sous 24h ouvrées. En attendant, n'hésitez pas à consulter mon portfolio ou mon blog pour en savoir plus sur ma façon de travailler.
                        </Text>

                        {/* Rappel du message */}
                        <div style={messageBox}>
                            <Text style={messageLabel}>
                                <span style={{ marginRight: "8px" }}>💭</span> Votre message
                            </Text>
                            <Text style={messageText}>{message}</Text>
                        </div>

                        <Text style={paragraph}>
                            À très vite,<br />
                            <strong style={{ color: "#ffffff" }}>Omar El Koujouk</strong>
                        </Text>
                    </Section>

                    {/* Social Links / Footer */}
                    <Section style={footer}>
                        <Row style={{ marginBottom: "16px" }}>
                            <Column align="center">
                                <Link href="https://omarelkoujouk.com" style={footerLink}>Site Web</Link>
                                <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.2)" }}>•</span>
                                <Link href="https://linkedin.com/in/omarelkoujouk" style={footerLink}>LinkedIn</Link>
                                <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.2)" }}>•</span>
                                <Link href="https://github.com/omarkoujouk" style={footerLink}>GitHub</Link>
                            </Column>
                        </Row>
                        <Text style={footerText}>
                            Développeur Full Stack & Salesforce
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ClientConfirmationEmail;

// Styles (Reuse from ContactEmail for consistency)
const main = {
    backgroundColor: "#0b0c19",
    fontFamily:
        "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif",
    padding: "40px 20px",
};

const container = {
    maxWidth: "600px",
    width: "100%",
    margin: "0 auto",
    background: "linear-gradient(145deg, #16182f, #1f2242)",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(156,196,255,0.15)",
    boxShadow: "0 25px 60px rgba(5,6,15,0.8)",
};

const header = {
    background:
        "linear-gradient(135deg, rgba(156,196,255,0.15) 0%, rgba(139,92,246,0.15) 100%)",
    padding: "32px 40px",
    borderBottom: "1px solid rgba(156,196,255,0.2)",
};

const heading = {
    margin: "0",
    fontSize: "24px",
    fontWeight: "700",
    color: "#9cc4ff",
    textShadow: "0 0 20px rgba(156,196,255,0.5)",
    letterSpacing: "-0.5px",
};

const subHeading = {
    margin: "8px 0 0 0",
    fontSize: "13px",
    color: "rgba(255,255,255,0.6)",
    fontWeight: "400",
};

const contentContainer = {
    padding: "32px 40px",
};

const greeting = {
    fontSize: "18px",
    color: "#ffffff",
    fontWeight: "600",
    marginBottom: "16px",
    marginTop: 0,
};

const paragraph = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#d1d5db",
    marginBottom: "24px",
    marginTop: 0,
};

const messageBox = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(156,196,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow:
        "inset 0 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(156,196,255,0.1)",
};

const messageLabel = {
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "1.2px",
    color: "rgba(255,255,255,0.5)",
    fontWeight: "600",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    marginTop: 0,
};

const messageText = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#f1f3ff",
    whiteSpace: "pre-wrap" as const,
    wordWrap: "break-word" as const,
    margin: 0,
};

const footer = {
    background: "rgba(0,0,0,0.2)",
    padding: "24px 40px",
    borderTop: "1px solid rgba(156,196,255,0.1)",
    textAlign: "center" as const,
};

const footerLink = {
    color: "#9cc4ff",
    fontSize: "13px",
    textDecoration: "none",
    fontWeight: "500",
};

const footerText = {
    margin: "0",
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    color: "rgba(156,196,255,0.6)",
    fontWeight: "500",
};
