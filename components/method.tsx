import { site } from "@/lib/site-data";
import { images } from "@/lib/images";
import { SiteImage } from "./site-image";

export function Method() {
  return (
    <section id="metodo" className="scroll-mt-20 bg-primary-light/50 py-20">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="section-title">Como funciona o atendimento</h2>
            <p className="section-subtitle">
              Um processo claro em quatro etapas — da primeira conversa ao resultado sustentável.
            </p>
          </div>
          <SiteImage
            src={images.food}
            alt="Alimentos naturais e variados — base de uma nutrição equilibrada"
            className="hidden aspect-[4/3] rounded-2xl shadow-md ring-1 ring-border lg:block"
            sizes="320px"
          />
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.method.map((step) => (
            <li key={step.step} className="card-surface relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        <SiteImage
          src={images.food}
          alt="Alimentos naturais e variados"
          className="mt-8 aspect-[21/9] rounded-2xl shadow-md ring-1 ring-border lg:hidden"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
