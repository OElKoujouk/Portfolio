import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Column,
    Row,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    date: string;
}

export const ContactEmail = ({
    fullName,
    email,
    phone,
    message,
    date,
}: ContactEmailProps) => {
    return (
        <Html lang="fr">
            <Head />
            <Preview>nouveau message de {fullName}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Row>
                            <Column>
                                <Heading style={heading}>💬 Nouveau message</Heading>
                                <Text style={subHeading}>{date}</Text>
                            </Column>
                        </Row>
                    </Section>

                    <Section style={contentContainer}>
                        {/* Nom complet */}
                        <Row style={row}>
                            <Column style={iconColumn}>
                                <div style={iconWrapper}>
                                    <Text style={icon}>👤</Text>
                                </div>
                            </Column>
                            <Column style={infoColumn}>
                                <Text style={label}>Nom complet</Text>
                                <Text style={value}>{fullName}</Text>
                            </Column>
                        </Row>

                        {/* Email */}
                        <Row style={row}>
                            <Column style={iconColumn}>
                                <div style={iconWrapper}>
                                    <Text style={icon}>📧</Text>
                                </div>
                            </Column>
                            <Column style={infoColumn}>
                                <Text style={label}>Email</Text>
                                <Link href={`mailto:${email}`} style={link}>
                                    {email}
                                </Link>
                            </Column>
                        </Row>

                        {/* Téléphone */}
                        <Row style={rowNoBorder}>
                            <Column style={iconColumn}>
                                <div style={iconWrapper}>
                                    <Text style={icon}>📱</Text>
                                </div>
                            </Column>
                            <Column style={infoColumn}>
                                <Text style={label}>Téléphone</Text>
                                <Link href={`tel:${phone.replace(/\s/g, "")}`} style={linkWhite}>
                                    {phone}
                                </Link>
                            </Column>
                        </Row>
                    </Section>

                    {/* Message */}
                    <Section style={messageContainer}>
                        <div style={messageBox}>
                            <Text style={messageLabel}>
                                <span style={{ marginRight: "8px" }}>💭</span> Message
                            </Text>
                            <Text style={messageText}>{message}</Text>
                        </div>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Vous pouvez répondre directement à cet email pour poursuivre la
                            conversation.
                        </Text>
                        <Text style={footerBrand}>Site Web Omar El Koujouk</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactEmail;

// Styles
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

const row = {
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    padding: "16px 0",
};

const rowNoBorder = {
    padding: "16px 0",
};

const iconColumn = {
    width: "40px",
    verticalAlign: "top",
};

const iconWrapper = {
    width: "32px",
    height: "32px",
    background:
        "linear-gradient(135deg, rgba(156,196,255,0.2), rgba(139,92,246,0.2))",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(156,196,255,0.3)",
};

const icon = {
    fontSize: "16px",
    margin: 0,
};

const infoColumn = {
    paddingLeft: "16px",
    verticalAlign: "middle",
};

const label = {
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "1.2px",
    color: "rgba(255,255,255,0.5)",
    fontWeight: "600",
    marginBottom: "4px",
    marginTop: 0,
};

const value = {
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: "600",
    wordBreak: "break-word" as const,
    margin: 0,
};

const link = {
    fontSize: "15px",
    color: "#9cc4ff",
    fontWeight: "500",
    textDecoration: "none",
    wordBreak: "break-word" as const,
};

const linkWhite = {
    ...link,
    color: "#ffffff",
};

const messageContainer = {
    padding: "0 40px 32px 40px",
};

const messageBox = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(156,196,255,0.15)",
    borderRadius: "16px",
    padding: "24px",
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

const footerText = {
    margin: "0 0 12px 0",
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: "1.6",
};

const footerBrand = {
    margin: "0",
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    color: "rgba(156,196,255,0.6)",
    fontWeight: "500",
};
