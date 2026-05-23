"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";
import { IconChevron } from "./icons";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 border-t border-border">
      <div className="section-container max-w-3xl">
        <h2 className="section-title text-center">Perguntas frequentes</h2>
        <p className="section-subtitle text-center mx-auto">
          Tire suas dúvidas antes de agendar. Estamos aqui para ajudar, sem julgamento.
        </p>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {site.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition-colors hover:text-primary"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <IconChevron
                    className={cn("h-5 w-5 shrink-0 text-muted transition-transform", isOpen && "rotate-180")}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
