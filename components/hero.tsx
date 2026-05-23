import { site, whatsappUrl } from "@/lib/site-data";
import { images } from "@/lib/images";
import { SiteImage } from "./site-image";
import { IconWhatsApp } from "./icons";

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
            {site.modalityLabel}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {site.hero.headline}
          </h1>
          <p className="hero-text-secondary mt-6 text-lg leading-relaxed">{site.hero.subheadline}</p>
          <ul className="mt-8 space-y-3 text-sm text-white sm:text-base">
            {[
              "Consulta de avaliação acessível",
              "Plano alimentar personalizado",
              "Suporte via WhatsApp entre consultas",
              "Base científica, sem modismos",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a373]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              <IconWhatsApp className="h-5 w-5" />
              Agendar no WhatsApp
            </a>
            <a href="#metodo" className="hero-btn-secondary">
              Conhecer o método
            </a>
          </div>
          <p className="mt-6 text-xs text-white/90 sm:text-sm">
            {site.crn} · Atendimento {site.modality} · {site.insurance}
          </p>
        </div>
        <div className="relative">
          <SiteImage
            src={images.professional}
            alt={`${site.name}, nutricionista — retrato profissional`}
            priority
            className="aspect-[4/5] w-full max-w-md mx-auto rounded-2xl shadow-xl ring-1 ring-white/20 lg:max-w-none"
            imageClassName="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 480px"
          />
          <div className="absolute -bottom-4 -left-2 rounded-2xl border border-white/20 bg-card px-4 py-3 shadow-md sm:-left-6">
            <p className="text-xs font-medium text-muted">Marca</p>
            <p className="text-lg font-bold text-primary">{site.brand}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
