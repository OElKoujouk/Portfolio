import { BlogPostBase } from "@/types/blog";

export const infrastructureCiCd: BlogPostBase = {
    slug: "infrastructure-ci-cd-docker-serenite",
    title: {
        fr: "L'art du déploiement invisible : Pourquoi mes sites ne plantent jamais",
        en: "The Art of Invisible Deployment: Why My Sites Never Crash"
    },
    excerpt: {
        fr: "Dormez tranquille : votre site reste en ligne. Découvrez mon architecture 'Zero-Downtime' basée sur Docker, CI/CD et le Cloud moderne.",
        en: "Sleep tight: your site stays online. Discover my 'Zero-Downtime' architecture based on Docker, CI/CD, and the modern Cloud."
    },
    date: "2026-03-05",
    readingTime: {
        fr: "7 min",
        en: "7 min"
    },
    tags: ["DevOps", "Docker", "CI/CD", "Fiabilité"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    seoKeywords: {
        fr: [
            "Expert DevOps Freelance",
            "Déploiement continu CI/CD",
            "Architecture haute disponibilité",
            "Docker pour le web",
            "Maintenance site critique",
        ],
        en: [
            "Freelance DevOps Expert",
            "CI/CD continuous deployment",
            "High availability architecture",
            "Docker for web",
            "Critical site maintenance",
        ]
    },
    content: {
        fr: `
<h2>La peur du "Vendredi soir"</h2>
<p>
Vous connaissez ce scénario ? Un développeur fait une "petite modification" le vendredi. Tout semble marcher.
Le week-end arrive, et le lundi matin, vous découvrez que le site est cassé depuis 48h. Perte de CA, perte d'image.
</p>
<p>
C'est inacceptable en 2026. C'est pourquoi j'applique les méthodes des géants de la Tech (Google, Netflix) à l'échelle de vos projets.
</p>

<h2>1. L'Automatisation Totale (CI/CD)</h2>
<p>
Je ne touche jamais aux serveurs de production à la main. C'est l'erreur humaine assurée.
À la place, j'utilise des pipelines <strong>CI/CD</strong> (Intégration et Déploiement Continus).
</p>
<div class="bg-white/5 p-4 rounded-lg my-4">
  <strong>Le Processus Automatique :</strong>
  <ol class="list-decimal pl-4 mt-2 space-y-1 text-sm">
    <li>Je pousse le code.</li>
    <li>Des robots lancent <strong>50+ tests automatiques</strong> (base de données, affichage mobile, paiement).</li>
    <li>Si (et seulement si) tout est vert ✅, la mise à jour est envoyée.</li>
    <li>Si un test échoue 🛑, le déploiement est bloqué. Votre site reste sain.</li>
  </ol>
</div>

<h2>2. Docker : "Ça marche chez moi... et chez vous"</h2>
<p>
Le drame classique : "Mais ça marchait sur mon ordinateur !".
Avec <strong>Docker</strong>, j'emballe votre site dans un conteneur étanche. Il contient tout ce qu'il faut pour tourner.
Qu'il soit sur mon Mac ou sur votre serveur Cloud, il se comporte exactement de la même manière.
</p>

<h2>3. Zero Downtime Deployment</h2>
<p>
Mettre à jour le site ne doit pas couper le service ("Site en maintenance").
Grace à des architectures modernes (comme Vercel ou Kubernetes), la nouvelle version du site est chargée en parallèle.
Une fois prête, le trafic est basculé instantanément. 
</p>
<p>
<strong>Résultat :</strong> Vos clients ne voient aucune coupure, même si je déploie 10 fois par jour.
</p>

<h2>Conclusion</h2>
<p>
La stabilité n'est pas une option, c'est la base de votre business.
En choisissant cette architecture, vous achetez avant tout votre <strong>tranquillité d'esprit</strong>.
</p>
`,
        en: `
<h2>The "Friday Night" Fear</h2>
<p>
Do you know this scenario? A developer makes a "small change" on Friday. Everything seems to work.
The weekend comes, and on Monday morning, you discover the site has been broken for 48h. Lost revenue, lost reputation.
</p>
<p>
This is unacceptable in 2026. That's why I apply the methods of Tech giants (Google, Netflix) to your projects' scale.
</p>

<h2>1. Total Automation (CI/CD)</h2>
<p>
I never touch production servers by hand. That guarantees human error.
Instead, I use <strong>CI/CD</strong> pipelines (Continuous Integration and Deployment).
</p>
<div class="bg-white/5 p-4 rounded-lg my-4">
  <strong>The Automatic Process:</strong>
  <ol class="list-decimal pl-4 mt-2 space-y-1 text-sm">
    <li>I push the code.</li>
    <li>Robots launch <strong>50+ automatic tests</strong> (database, mobile display, payment).</li>
    <li>If (and only if) everything is green ✅, the update is sent.</li>
    <li>If a test fails 🛑, the deployment is blocked. Your site stays healthy.</li>
  </ol>
</div>

<h2>2. Docker: "It works on my machine... and yours"</h2>
<p>
The classic drama: "But it worked on my computer!".
With <strong>Docker</strong>, I package your site in a sealed container. It contains everything needed to run.
Whether on my Mac or your Cloud server, it behaves exactly the same way.
</p>

<h2>3. Zero Downtime Deployment</h2>
<p>
Updating the site shouldn't cut the service ("Site under maintenance").
Thanks to modern architectures (like Vercel or Kubernetes), the new version of the site is loaded in parallel.
Once ready, traffic is switched instantly. 
</p>
<p>
<strong>Result:</strong> Your customers see no interruption, even if I deploy 10 times a day.
</p>

<h2>Conclusion</h2>
<p>
Stability is not an option, it is the foundation of your business.
By choosing this architecture, you are primarily buying your <strong>peace of mind</strong>.
</p>
`
    }
};
