# Pablo Durães — Portfólio

Portfólio pessoal de **Pablo Durães**, desenvolvedor Full Stack (React, React Native e Next.js).

Reúne os principais projetos, a formação, as tecnologias que uso e as formas de contato.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components)
- React 19 + TypeScript
- Tailwind CSS 4
- `next/font` com JetBrains Mono local
- `next/og` para gerar a imagem de compartilhamento (Open Graph)

## Estrutura

```
app/
├── site.ts               # Conteúdo do site em português e inglês: dados pessoais, experiência, projetos, skills e formação
├── components.tsx        # Componentes interativos (terminal, typewriter, métricas animadas…)
├── [lang]/
│   ├── page.tsx          # Página principal (Server Component), renderizada por idioma
│   ├── layout.tsx        # Layout raiz, fontes e metadados de SEO por idioma
│   └── opengraph-image.tsx # Imagem de prévia para LinkedIn, WhatsApp etc.
├── icon.png              # Favicon
└── globals.css           # Estilos globais e tema
```

O português é servido em `/` e o inglês em `/en` (veja `next.config.ts`).

Para atualizar textos, projetos ou skills, edite apenas `app/site.ts` — nos dois idiomas.

## Rodando localmente

```bash
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando      | Descrição                       |
| ------------ | ------------------------------- |
| `pnpm dev`   | Servidor de desenvolvimento     |
| `pnpm build` | Build de produção               |
| `pnpm start` | Servidor de produção            |
| `pnpm lint`  | Verificação de código (ESLint)  |

## Contato

- E-mail: [pablosantosduraes6@gmail.com](mailto:pablosantosduraes6@gmail.com)
- LinkedIn: [Pablo Durães](https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/)

> Dica: experimente ↑ ↑ ↓ ↓ ← → no teclado.
