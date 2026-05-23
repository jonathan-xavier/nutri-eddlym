import { site } from "@/lib/site-data";
import { IconCheck } from "./icons";

export function Differentials() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="section-container">
        <h2 className="section-title">Por que escolher o {site.brand}?</h2>
        <p className="section-subtitle">{site.differential}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.differentials.map((item) => (
            <article key={item.title} className="rounded-2xl bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <IconCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
