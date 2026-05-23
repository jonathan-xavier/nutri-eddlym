import { site } from "@/lib/site-data";
import { images } from "@/lib/images";
import { SiteImage } from "./site-image";
import { IconInstagram } from "./icons";

export function Authority() {
  return (
    <section id="conteudo" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="section-title">Conteúdo e autoridade</h2>
        <p className="section-subtitle">
          Educação nutricional em vídeo, sem medo de mostrar o rosto — acompanhe no Instagram e
          aprenda antes mesmo da consulta.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {images.reels.map((reel) => (
            <a
              key={reel.src}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <SiteImage
                src={reel.src}
                alt={reel.alt}
                className="aspect-square rounded-2xl shadow-sm ring-1 ring-border transition-transform group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 90vw, 280px"
              />
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <IconInstagram className="h-5 w-5" />
            Seguir {site.instagramHandle}
          </a>
          <p className="text-sm text-muted text-center sm:text-left">
            Conteúdo educativo diário · {site.brand}
          </p>
        </div>
      </div>
    </section>
  );
}
