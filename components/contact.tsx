import { site, whatsappUrl } from "@/lib/site-data";
import { IconInstagram, IconMapPin, IconWhatsApp } from "./icons";

export function Contact() {
  const mapQuery = encodeURIComponent("Recife, PE, Brasil");
  return (
    <section id="contato" className="scroll-mt-20 py-20 bg-card border-t border-border">
      <div className="section-container">
        <h2 className="section-title">Localização e contato</h2>
        <p className="section-subtitle">
          Presencial em {site.city} ou online para todo o Brasil. Escolha o que funciona melhor
          para você.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <IconMapPin className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="mt-1 text-sm text-muted">{site.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center text-primary font-bold text-sm">⏱</span>
              <div>
                <h3 className="font-semibold">Horário</h3>
                <p className="mt-1 text-sm text-muted">{site.hours}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <IconWhatsApp className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-medium text-primary hover:underline"
                >
                  {site.whatsappDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <IconInstagram className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-medium text-primary hover:underline"
                >
                  {site.instagramHandle}
                </a>
              </div>
            </div>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
              <IconWhatsApp className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mapa — Recife, PE"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=12&output=embed`}
              className="h-72 w-full min-h-[280px] lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
