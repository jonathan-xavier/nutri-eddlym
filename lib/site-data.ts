export const site = {
  name: "Dra. Eddlym",
  fullName: "Eddlym — Nutricionista",
  brand: "Fala Nutri",
  crn: "CRN-8 XXXXX/PE",
  city: "Recife",
  state: "PE",
  region: "Recife / PE",
  specialties: [
    {
      id: "emagrecimento",
      name: "Emagrecimento",
      description:
        "Estratégia alimentar sustentável, sem proibições extremas nem efeito sanfona.",
      icon: "scale",
    },
    {
      id: "longevidade",
      name: "Longevidade",
      description:
        "Hábitos e nutrientes que protegem sua saúde a longo prazo, com base em evidências.",
      icon: "leaf",
    },
    {
      id: "performance",
      name: "Performance",
      description:
        "Nutrição para treino, recuperação e energia no dia a dia — esporte e rotina.",
      icon: "bolt",
    },
    {
      id: "comportamento",
      name: "Comportamento alimentar",
      description:
        "Relação saudável com a comida, sem culpa e com mudanças que você consegue manter.",
      icon: "heart",
    },
  ],
  modality: "híbrido" as const,
  modalityLabel: "Presencial em Recife e online para todo o Brasil",
  insurance: "Atendimento particular",
  differential:
    "Nutrição baseada em ciência, linguagem acessível e acompanhamento próximo — o método Fala Nutri.",
  whatsapp: "5581995127701",
  whatsappDisplay: "(81) 9512-7701",
  whatsappMessage:
    "Oi, vim pelo site. Gostaria de agendar uma consulta de avaliação.",
  instagram: "https://www.instagram.com/nutri.eddlym/",
  instagramHandle: "@nutri.eddlym",
  address: "Recife, PE — endereço do consultório sob confirmação no agendamento",
  hours: "Segunda a sexta, 8h às 18h (horários sob agendamento)",
  seo: {
    title:
      "Nutricionista em Recife — Emagrecimento e Longevidade | Dra. Eddlym",
    description:
      "Nutricionista em Recife/PE e online para todo o Brasil. Emagrecimento sustentável, longevidade e performance com o método Fala Nutri. Agende sua consulta de avaliação.",
  },
  hero: {
    headline:
      "Comer bem não é se privar. É aprender o que funciona para o seu corpo.",
    subheadline:
      "Nutrição baseada em ciência, não em moda. Emagrecimento real, sem abrir mão do que você gosta — com acompanhamento próximo entre as consultas.",
  },
  method: [
    {
      step: 1,
      title: "Anamnese completa",
      description:
        "Entendemos sua rotina, histórico, exames e objetivos — sem julgamento.",
    },
    {
      step: 2,
      title: "Plano personalizado",
      description:
        "Plano alimentar feito para você, respeitando preferências e sua realidade.",
    },
    {
      step: 3,
      title: "Acompanhamento",
      description:
        "Suporte via WhatsApp entre consultas para tirar dúvidas e ajustar o caminho.",
    },
    {
      step: 4,
      title: "Resultados sustentáveis",
      description:
        "Trabalhamos juntos para alcançar seus objetivos de forma progressiva e duradoura.",
    },
  ],
  differentials: [
    {
      title: "Base científica",
      description:
        "Recomendações fundamentadas em evidências, sem modismos ou promessas milagrosas.",
    },
    {
      title: "Atendimento online",
      description:
        "Consultas por videochamada para quem mora longe ou prefere praticidade.",
    },
    {
      title: "Suporte entre consultas",
      description:
        "Canal aberto no WhatsApp para dúvidas do dia a dia — você não fica sozinho(a).",
    },
    {
      title: "Sem dietas proibitivas",
      description:
        "Nada de lista interminável do que não pode comer. Foco em educação e equilíbrio.",
    },
  ],
  about: {
    formation:
      "Formação em Nutrição com atuação em emagrecimento, longevidade e performance esportiva.",
    bio: "Criadora do Fala Nutri, une ciência e linguagem acessível para quem já cansou de dieta restritiva. Conteúdo educativo em vídeo e acompanhamento humanizado em cada consulta.",
  },
  testimonials: [
    {
      name: "M. S.",
      text: "Pela primeira vez não senti que estava de dieta. Aprendi a comer melhor e os resultados vieram no meu ritmo.",
    },
    {
      name: "R. A.",
      text: "O suporte pelo WhatsApp faz toda diferença. Sempre que travo, a Dra. Eddlym me orienta sem culpa.",
    },
    {
      name: "C. L.",
      text: "Atendi online morando fora de Recife. Funcionou perfeitamente, com plano que cabia na minha rotina de trabalho.",
    },
  ],
  faq: [
    {
      question: "Quanto custa a consulta?",
      answer:
        "Os valores são informados no agendamento da consulta de avaliação. Entre em contato pelo WhatsApp para receber as opções de planos e formas de pagamento.",
    },
    {
      question: "Funciona para quem mora longe (online)?",
      answer:
        "Sim. O atendimento online funciona para todo o Brasil, com a mesma qualidade da consulta presencial, por videochamada.",
    },
    {
      question: "Vou ter que tomar suplemento?",
      answer:
        "A suplementação é avaliada individualmente, quando necessário. Não é obrigatória para todos os pacientes e nunca substitui uma alimentação adequada.",
    },
    {
      question: "Em quanto tempo vejo resultado?",
      answer:
        "Cada corpo responde de forma diferente. Trabalhamos metas progressivas e sustentáveis — sem prometer prazos fixos para todos.",
    },
    {
      question: "O plano alimentar é muito restritivo?",
      answer:
        "Não. O plano é personalizado para incluir o que você gosta, com ajustes graduais. O foco é educação, não punição.",
    },
    {
      question: "Aceitam convênio?",
      answer:
        "O atendimento é particular. Emitimos recibo para reembolso quando o seu plano permitir — consulte sua operadora.",
    },
  ],
} as const;

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
