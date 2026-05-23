import { site } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 py-20 bg-primary-light/40">
      <div className="section-container">
        <h2 className="section-title">O que dizem os pacientes</h2>
        <p className="section-subtitle">
          Depoimentos com autorização. Resultados individuais variam conforme histórico, adesão e
          condições de saúde de cada pessoa.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t) => (
            <blockquote key={t.name} className="card-surface">
              <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-primary">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          Antes/depois (se utilizado no futuro): incluir aviso de que resultados individuais variam.
        </p>
      </div>
    </section>
  );
}
