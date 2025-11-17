export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-primary py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 text-center text-sm text-gray-400 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Portfolio — Développeur Full-Stack & Salesforce.</p>
        <p className="text-gray-500">Basé en Ile-de-France · Disponible en présentiel et distanciel.</p>
      </div>
    </footer>
  );
}
