import { site } from "@/lib/site-data";
import { SpecialtyIcon } from "./icons";

export function Specialties() {
  return (
    <section id="especialidades" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="section-title">Especialidades</h2>
        <p className="section-subtitle">
          Atuação em emagrecimento, longevidade, performance e comportamento alimentar — sempre com
          plano individualizado.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {site.specialties.map((item) => (
            <article key={item.id} className="card-surface flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <SpecialtyIcon name={item.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
