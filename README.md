This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, add the following environment variables in an `.env` file in the root folder:
```./.env
NEXT_PUBLIC_PROJECT_KEY={OpenReplay Project Key}
NEXT_PUBLIC_INGEST_POINT={OpenReplay Ingest Point URL}

```
Then, run the development server:

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

This website works along [https://github.com/nmcolome/open-replay-frontend](this frontend).

## Running OpenReplay with Ngrok
To test locally, run the app using ngrok.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
