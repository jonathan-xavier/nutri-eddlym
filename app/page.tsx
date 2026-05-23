import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Specialties } from "@/components/specialties";
import { Differentials } from "@/components/differentials";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Authority } from "@/components/authority";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Method />
        <Specialties />
        <Differentials />
        <About />
        <Testimonials />
        <Authority />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
