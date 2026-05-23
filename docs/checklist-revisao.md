# Checklist de revisão — site nutrição (CFN / conversão)

## Compliance e conteúdo

- [ ] **CRN visível** com número completo e estado (atualizar `lib/site-data.ts` — hoje placeholder `CRN-8 XXXXX/PE`)
- [ ] Sem promessa de resultado numérico (ex.: "perder X kg")
- [ ] Antes/depois com aviso obrigatório, se utilizado
- [ ] FAQ com: preço, online, suplemento, tempo de resultado, plano restritivo, convênio
- [ ] Depoimentos com iniciais ou nome + consentimento documentado

## Conversão e links

- [ ] WhatsApp pré-preenchido: "Oi, vim pelo site. Gostaria de agendar uma consulta de avaliação."
- [ ] Botão flutuante WhatsApp visível no mobile
- [ ] Link Instagram ativo: https://www.instagram.com/nutri.eddlym/
- [ ] Modalidade clara: híbrido (Recife + online Brasil)

## SEO e técnico

- [ ] Title: `Nutricionista em Recife — Emagrecimento e Longevidade | Dra. Eddlym`
- [ ] JSON-LD LocalBusiness + Nutritionist em `app/layout.tsx`
- [ ] Substituir URL em `lib/schema.ts` pelo domínio final
- [ ] Imagens reais no lugar dos placeholders (`docs/imagens-necessarias.md`)

## Dados a confirmar com a profissional

- [ ] Número CRN completo
- [ ] Endereço do consultório (para mapa preciso)
- [ ] Valores de consulta (para FAQ, se quiser publicar)
- [ ] Convênios / particular
- [ ] Horários exatos de atendimento
