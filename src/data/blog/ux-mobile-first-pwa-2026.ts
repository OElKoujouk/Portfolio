import { BlogPostBase } from "@/types/blog";

export const mobileFirstUx: BlogPostBase = {
    slug: "ux-mobile-first-pwa-2026",
    title: {
        fr: "Votre site mobile fait fuir 50% de vos clients (et comment corriger ça)",
        en: "Your Mobile Site Scares Away 50% of Your Customers (And How to Fix It)"
    },
    excerpt: {
        fr: "Avoir un site 'Responsive' ne suffit plus en 2026. Découvrez le standard 'Mobile Native' et les PWA pour offrir une expérience digne d'une application de l'App Store, directement dans le navigateur.",
        en: "Having a 'Responsive' site is no longer enough in 2026. Discover the 'Mobile Native' standard and PWAs to offer an App Store-worthy experience, directly in the browser."
    },
    date: "2026-02-10",
    readingTime: {
        fr: "5 min",
        en: "5 min"
    },
    tags: ["UX/UI", "Mobile First", "PWA", "Conversion"],
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    seoKeywords: {
        fr: [
            "Optimisation site mobile",
            "PWA vs Application Native",
            "UX Mobile First",
            "Taux de conversion mobile",
            "Site web comme une app",
        ],
        en: [
            "Mobile site optimization",
            "PWA vs Native App",
            "Mobile First UX",
            "Mobile conversion rate",
            "Website like an app",
        ]
    },
    content: {
        fr: `
<h2>La dure réalité du trafic mobile</h2>
<p>
Regardez vos statistiques : <strong>60% à 80%</strong> de vos visiteurs sont sur mobile.
Pourtant, la plupart des sites web sont conçus sur un grand écran d'ordinateur, puis "écrasés" pour rentrer dans un smartphone.
</p>
<p>
Résultat ? Des boutons trop petits, des menus impossibles à ouvrir, et un utilisateur qui part chez le concurrent en 3 secondes.
</p>

<h2>L'approche "Mobile Native" que j'applique</h2>
<p>
Je ne fais pas du "Responsive". Je conçois des interfaces qui se comportent comme des applications natives (comme Instagram ou Airbnb).
</p>
<ul>
  <li><strong>Navigation au pouce :</strong> Les boutons importants sont en bas de l'écran.</li>
  <li><strong>Gestes tactiles :</strong> On peut "swiper" les images et les menus.</li>
  <li><strong>Animations fluides :</strong> 60 images par seconde, comme une app.</li>
</ul>

<h2>Le secret : Les Progressive Web Apps (PWA)</h2>
<p>
C'est la technologie qui permet à votre site web d'être installé sur l'écran d'accueil du téléphone de vos clients, sans passer par l'App Store (et ses 30% de commission).
</p>
<ul>
  <li>Fonctionne hors-ligne.</li>
  <li>Envoie des notifications push.</li>
  <li>S'ouvre en plein écran (sans barre d'adresse navigateur).</li>
</ul>

<h2>Pourquoi ça booste votre CA ?</h2>
<p>
C'est mathématique. Une meilleure expérience utilisateur réduit la friction.
En passant d'un site "adapté" à un site "pensé mobile", j'observe régulièrement des bonds de <strong>+20% à +40%</strong> sur le taux de conversion.
</p>

<h2>Diagnostic Gratuit</h2>
<p>
Prenez votre téléphone et allez sur votre site actuel. Si vous devez zoomer pour lire ou cliquer, vous perdez de l'argent.
</p>
`,
        en: `
<h2>The Harsh Reality of Mobile Traffic</h2>
<p>
Look at your stats: <strong>60% to 80%</strong> of your visitors are on mobile.
Yet, most websites are designed on a large computer screen, then "squashed" to fit into a smartphone.
</p>
<p>
Result? Buttons too small, menus impossible to open, and a user who leaves to a competitor in 3 seconds.
</p>

<h2>The "Mobile Native" Approach I Apply</h2>
<p>
I don't just do "Responsive". I design interfaces that behave like native applications (like Instagram or Airbnb).
</p>
<ul>
  <li><strong>Thumb Navigation:</strong> Important buttons are at the bottom of the screen.</li>
  <li><strong>Touch Gestures:</strong> You can "swipe" images and menus.</li>
  <li><strong>Fluid Animations:</strong> 60 frames per second, just like an app.</li>
</ul>

<h2>The Secret: Progressive Web Apps (PWA)</h2>
<p>
This is the technology that allows your website to be installed on your customers' phone home screen, without going through the App Store (and its 30% commission).
</p>
<ul>
  <li>Works offline.</li>
  <li>Sends push notifications.</li>
  <li>Opens full screen (no browser address bar).</li>
</ul>

<h2>Why Does It Boost Your Revenue?</h2>
<p>
It's mathematical. Better user experience reduces friction.
By moving from an "adapted" site to a "mobile-thought" site, I regularly observe leaps of <strong>+20% to +40%</strong> in conversion rates.
</p>

<h2>Free Diagnosis</h2>
<p>
Take your phone and go to your current site. If you have to zoom to read or click, you are losing money.
</p>
`
    }
};
