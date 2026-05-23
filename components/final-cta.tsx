import { site, whatsappUrl } from "@/lib/site-data";
import { IconWhatsApp } from "./icons";

export function FinalCta() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pronto(a) para começar sem sofrimento?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-light/90 text-lg">
            Agende sua consulta de avaliação. Trabalhamos juntos para alcançar seus objetivos de
            forma sustentável — com ciência, acolhimento e um plano que cabe na sua vida.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.02]"
          >
            <IconWhatsApp className="h-5 w-5" />
            Agendar consulta de avaliação
          </a>
          <p className="mt-6 text-xs text-white/80">
            {site.crn} · {site.modalityLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
