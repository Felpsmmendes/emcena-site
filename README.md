# Site Em Cena Eventos

Astro 5 (site estático) + GSAP/ScrollTrigger + Lenis. Sem framework de UI.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde mexer

| O quê | Onde |
|---|---|
| Textos, pacotes, serviços, FAQ, contato, depoimentos | `src/data/site.ts` |
| Fotos | `src/assets/fotos/` (ver nomes abaixo) |
| Cores, fontes, espaçamentos | `src/styles/global.css` (`:root`) |
| Animações | `src/scripts/motion.ts` |
| Seções da home | `src/components/*.astro` |

### Fotos

Salve com estes nomes (jpg, png, webp ou avif) e rode o build. O Astro gera as versões otimizadas sozinho; enquanto a foto não existir, aparece um espaço reservado.

| Arquivo | Onde aparece | Formato |
|---|---|---|
| `hero` | topo da home | vertical 4:5, ≥1200×1500 |
| `bar` | card do bar + página do bar | 16:10 e 4:5 |
| `totem-retro` | card de atrações + página | 3:4 |
| `totem-fotografico`, `espelho-magico`, `cabine`, `plataforma-360`, `capa-de-revista`, `pista-led` | carrossel de atrações + páginas | 3:4 |
| `equipe` | "Quem faz" | 5:4 |
| `faixa` | faixa de ponta a ponta (texto claro por cima) | horizontal 16:9, ≥2400×1350, de preferência escura |

### Preço "a partir de"

Em `pacotes`, preencha `aPartirDe: 'R$ 00'`. A coluna só aparece quando pelo menos um pacote tem valor.

## Orçamento → Sala de Operações

O formulário chama a função `captura_lead_publica` do Supabase (já existe no Sala de Operações: armadilha anti-robô, limite de envios, UTM e deduplicação). O lead entra com origem **Site** na primeira etapa do funil.

1. Copie `.env.example` para `.env` e preencha `PUBLIC_SUPABASE_ANON_KEY` (chave pública/anon do projeto).
2. Na Vercel, cadastre as mesmas três variáveis.

Sem as variáveis, o formulário leva direto ao WhatsApp com a mensagem preenchida.

## Deploy (Vercel)

Importe o repositório na Vercel (framework: Astro). O `vercel.json` já redireciona as URLs do site antigo (`/bar-para-coqueteis`, `/cabine-fotografica`, `/quem-somos`...) para as novas, preservando o que o Google já indexou.

Antes de apontar o domínio: confirme quem controla o DNS de `emcenaeventos.com.br` (hoje com a agência que fez o site antigo).

## Já preenchido

- Fotos do Instagram (@emcenaeventos, out/2026): `hero` (bartenders no bar 360), `bar` (bar 360 montado), `faixa` (brinde dos noivos), `equipe` (equipe no congresso corporativo), `totem-retro` e `atracoes` (Totem Retrô). Enquadramento de cada uma em `fotoPosicao`, no `site.ts`.

- Logo (`src/assets/logo.png` e `logo-claro.png`) e favicon (azeitona do logo)
- Cardápios completos dos 5 pacotes (do portfólio A4)
- 4 avaliações reais do casamentos.com.br, sem citar ninguém da equipe; 93 avaliações, 100% recomendam, Casamentos Awards 2020–2026 (conferido em out/2026 — atualize `prova` de tempos em tempos)

## Em aberto (depende do Felps)

Tudo marcado com `EM ABERTO` no código. Enquanto vazio, o site esconde o bloco ou mostra a versão provisória.

| O quê | Onde | Enquanto não preencher |
|---|---|---|
| Fotos que faltam: `totem-fotografico`, `espelho-magico`, `cabine`, `plataforma-360`, `capa-de-revista`, `pista-led` | `src/assets/fotos/` | espaço reservado com o nome do arquivo (o carrossel mostra primeiro as que têm foto) |
| Nº de eventos realizados | `eventosRealizados` em `site.ts` | topo mostra "8 serviços" |
| Texto próprio de cada serviço | `comoFunciona` em cada item de `servicos` | seção "Como funciona" não aparece |
| Perguntas específicas por serviço | `perguntas` em cada item de `servicos` | usa as perguntas gerais |
| As 5 dúvidas reais do WhatsApp | `faq` | 6 perguntas genéricas |
| Preço "a partir de" (opcional) | `aPartirDe` em cada pacote | coluna escondida |
| Legenda da faixa ("Casamento · Bar 360 + Totem Retrô") | `index.astro`, componente `Faixa` | legenda de exemplo — trocar pela do evento da foto |
| História dos fundadores / Pista de LED | `historia`, item `pista-de-led` | texto do site antigo |
| Domínio | DNS de emcenaeventos.com.br | — |
