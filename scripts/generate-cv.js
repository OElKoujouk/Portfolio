const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const outputPath = path.join(__dirname, "..", "public", "assets", "omar-el-koujouk-cv.pdf");

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream(outputPath));

doc.fontSize(24).fillColor("#0f172a").text("Omar El Koujouk");
doc.moveDown(0.2);
doc.fontSize(14).fillColor("#1f2937").text("Développeur Salesforce & Full-Stack");

doc.moveDown();
doc.fontSize(12).fillColor("#0f172a").text("Contact", { underline: true });
doc.moveDown(0.2);
doc.fontSize(10).fillColor("#1f2937").text("Email : omar.lbn@outlook.com");
doc.text("Téléphone : 07 83 11 59 73");
doc.text("Champigny-sur-Marne 94500 - Permis B, véhicule");

doc.moveDown();
doc.fontSize(12).fillColor("#0f172a").text("Formations", { underline: true });
doc.moveDown(0.2);
doc.fontSize(10).fillColor("#1f2937").text("ETNA Paris — Master Architecte Logiciel (2024 - 2025)");
doc.text("ETNA Paris — Bachelor Concepteur Développeur d’application (2022 - 2024)");
doc.text("EPITECH Paris — Titre d’Expert en Technologies de l’information (2019 - 2022)");

doc.moveDown();
doc.fontSize(12).fillColor("#0f172a").text("Expériences professionnelles", { underline: true });

doc.moveDown(0.2);
doc.fontSize(10).fillColor("#1f2937").text("Développeur Salesforce (CDD), Dev First — Avril 2024 à Novembre 2025");
doc.list([
  "Fonctionnalités personnalisées en Apex et Lightning Web Components.",
  "Extension Chrome “LinkedIn → Salesforce” pour synchroniser les données.",
  "Refonte du site dev-first.com et intégrations avec les services Salesforce.",
  "Configuration Agentforce : Topics, Actions, Web To Lead et automatisations.",
  "Intégration d’API externes (ex : OpenAI) et outillage SFDX/Trailhead."
]);

doc.moveDown();
doc.text("Administrateur d’infrastructures sécurisées (CDD), KeopsConcept — Mars 2023 à Janvier 2024");
doc.list([
  "Interface avec les machines de production (PHP).",
  "Génération de fichiers DXF depuis les données d’entreprise.",
  "Optimisation du code pour réduire les erreurs et accélérer les processus de coupe."
]);

doc.moveDown();
doc.text("Lauréat Projet NavZen — ETNA Paris (Octobre 2025)");
doc.list([
  "Application de navigation intérieure React Native (auth, recherche, BLE).",
  "Algorithme de trilatération en Rust et calcul de chemin.",
  "Backend Symfony/API REST et intégration Unity 3D embarquée."
]);

doc.moveDown();
doc.fontSize(12).fillColor("#0f172a").text("Compétences clés", { underline: true });
doc.fontSize(10).fillColor("#1f2937").list([
  "JavaScript / TypeScript, React & React Native",
  "Lightning Web Components, Apex, Node.js, Symfony",
  "Rust, Unity 3D, Automatisation SFDX",
  "Git, VS Code, Salesforce CLI, Notion"
]);

doc.moveDown();
doc.fontSize(12).fillColor("#0f172a").text("Langues & centres d’intérêt", { underline: true });
doc.fontSize(10).fillColor("#1f2937").text("Français : courant | Anglais : technique | Arabe : courant");
doc.text("Passionné de mécanique & motos sportives (GSX-R 750 K6).");

doc.end();

console.log("CV PDF généré :", outputPath);
