# www

Next.js portfolio site using the App Router, TypeScript, Sass, and npm.

## Layout

- `app/`: routes, layouts, and page-level components.
- `components/`: shared UI components.
- `styles/`: global Sass styles.
- `content/`: Markdown-backed site content.

## Commands

- `npm run dev`: start the development server.
- `npm run lint`: run ESLint.
- `npm run build`: lint and create a production build.
- `npm run format:check`: check Prettier formatting.

## Conventions

- Use the existing TypeScript, App Router, and Sass patterns.
- Next.js rewrites the tracked `next-env.d.ts` route-types import while `npm run dev` runs. Do not commit a change that only switches between `.next/types/routes.d.ts` and `.next/dev/types/routes.d.ts`.
- Keep `README.md` current as the project evolves.
- Update this file when project guidance or layout materially changes without bloating it.
