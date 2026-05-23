import { site, whatsappUrl } from "@/lib/site-data";
import { IconInstagram, IconWhatsApp } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-foreground py-12 text-background">
      <div className="section-container">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-primary-light">{site.brand}</p>
            <p className="mt-1 font-medium">{site.name}</p>
            <p className="mt-2 text-sm text-background/70">{site.crn}</p>
            <p className="mt-4 max-w-sm text-sm text-background/60">
              Nutricionista em {site.region}. {site.differential}
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              aria-label="WhatsApp"
            >
              <IconWhatsApp className="h-5 w-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              aria-label="Instagram"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-background/10 pt-8 text-xs text-background/50">
          <p>
            © {year} {site.name}. Todos os direitos reservados. Este site não substitui consulta
            nutricional individualizada.
          </p>
          <p className="mt-2">
            Resultados individuais variam conforme histórico, adesão e condições de saúde. Não
            prometemos perda de peso específica.
          </p>
        </div>
      </div>
    </footer>
  );
}
