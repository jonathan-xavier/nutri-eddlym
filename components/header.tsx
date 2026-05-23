import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site-data";

const nav = [
  { href: "#metodo", label: "Método" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-primary">{site.brand}</span>
          <span className="text-xs text-muted">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 text-xs sm:text-sm">
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
