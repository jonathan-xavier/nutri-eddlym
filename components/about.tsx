import { site } from "@/lib/site-data";
import { images } from "@/lib/images";
import { SiteImage } from "./site-image";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2">
        <SiteImage
          src={images.office}
          alt="Consultório de nutrição — ambiente acolhedor para atendimento"
          className="aspect-square max-w-md mx-auto w-full rounded-2xl shadow-md ring-1 ring-border lg:max-w-none"
          sizes="(max-width: 1024px) 90vw, 480px"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Conheça a profissional</p>
          <h2 className="mt-2 section-title">{site.name}</h2>
          <p className="mt-2 text-lg font-medium text-primary">{site.crn}</p>
          <p className="mt-6 leading-relaxed text-muted">{site.about.formation}</p>
          <p className="mt-4 leading-relaxed text-muted">{site.about.bio}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-primary-light/60 p-4">
              <dt className="text-xs font-semibold uppercase text-primary">Região</dt>
              <dd className="mt-1 font-medium">{site.region}</dd>
            </div>
            <div className="rounded-xl bg-primary-light/60 p-4">
              <dt className="text-xs font-semibold uppercase text-primary">Modalidade</dt>
              <dd className="mt-1 font-medium">{site.modalityLabel}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
