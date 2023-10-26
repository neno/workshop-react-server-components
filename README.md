# Workshop React Server Components

## Installation

```bash
Make sure you are running node: '>=18.17.0'

pnpm i
# or
npm i


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Build and checout the production mode for speed

```bash
pnpm build
# or
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Some interesting things to check out

1. All components are server components except for the NavLinks in the navigation, the SearchForm and the SubmitToWatchlist form.

2. The search page is also only rendered server-side using url search params instead of a client state.

3. The movie detail page in `app/movies/[id]/page.tsx` wraps the Reviews with a Suspense. This means that the Reviews will not be in the inital HTML response. They are fetched from [https://api.themoviedb.org](https://api.themoviedb.org) and will be streamed after they are rendered using Markdown and Day.js when they are ready.

4. On movie detial page you can add/remove the movie to/from the Watchlist. This is done by using a s [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions)

5. For more informations about the concept of React Server Components checkout the documentation page of the app [http://localhost:3000/docs](http://localhost:3000/docs)
