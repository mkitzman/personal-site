<h1 align="center">
  Michael Kitzman Personal Website
</h1>

Personal website I created using Astro/Tailwind CSS and Netlify. Built off of the Astro Cactus Theme

## Table Of Contents

1. [Key Features](#key-features)
2. [Live Site](#-live-site💻)
3. [Commands](#commands)
4. [Acknowledgment](#acknowledgment)
5. [Acknowledgment](#license)

## Key Features

- Astro v4 Fast 🚀
- TailwindCSS Utility classes
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- Dark / Light mode, using Tailwind and CSS variables
- [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
  - Includes [Admonitions](https://astro-cactus.chriswilliams.dev/posts/markdown-elements/admonistions/)
- [Satori](https://github.com/vercel/satori) for creating open graph png images
- Pagination
- [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
- [Webmentions](https://webmention.io/)
- Auto-generated:
  - [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
  - [robots.txt](https://github.com/alextim/astro-lib/blob/main/packages/astro-robots-txt/README.md)
  - [web app manifest](https://github.com/alextim/astro-lib/blob/main/packages/astro-webmanifest/README.md)
- [Pagefind](https://pagefind.app/) static search library integration
- [Astro Icon](https://github.com/natemoo-re/astro-icon) svg icon component
- [Expressive Code](https://expressive-code.com/) source code and syntax highlighter

## Live Site 💻

Check it out at [michaelkitzman.com](https://michaelkitzman.com), hosted on Netlify

## Commands

Replace pnpm with your choice of npm / yarn

| Command          | Action                                                         |
| :--------------- | :------------------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                          |
| `pnpm dev`       | Starts local dev server at `localhost:3000`                    |
| `pnpm build`     | Build your production site to `./dist/`                        |
| `pnpm postbuild` | Pagefind script to build the static search of your blog posts  |
| `pnpm preview`   | Preview your build locally, before deploying                   |
| `pnpm sync`      | Generate types based on your config in `src/content/config.ts` |

## Acknowledgment

This theme was built on top of [Astro Theme Cactus](https://github.com/chrismwilliams/astro-theme-cactus) which was inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

## License

MIT
