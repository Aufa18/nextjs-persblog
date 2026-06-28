export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = '2026-06-28';

  return (
    <footer className="py-4 border-t border-border text-center text-sm text-foreground/60">
      <p>© {currentYear} Aufa Wicaksono • All rights reserved<br />Last update: {lastUpdated}</p>
    </footer>
  );
}