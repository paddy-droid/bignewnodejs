# Fensterservice Website

A lean, SEO-strong, and fast Next.js 15 website for a window service in Niederösterreich & Wien.

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd fensterservice
    ```
3.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```

## Development

To start the development server using TurboPack:

```bash
pnpm dev
# or npm run dev
# or yarn dev
```

The site will be available at `http://localhost:3000`.

## Building for Production

To build the project for production:

```bash
pnpm build
# or npm run build
# or yarn build
```

This will create an optimized build in the `.next` directory.

## Deployment

This project is configured for easy deployment to Vercel.

1.  **Install Vercel CLI (if not already installed):**
    ```bash
    npm install -g vercel
    ```
2.  **Login to Vercel:**
    ```bash
    vercel login
    ```
3.  **Deploy the project:**
    ```bash
    vercel
    ```

Follow the prompts to link your project and deploy.

## Project Structure

```
fensterservice/
├── app/
│   ├── layout.tsx          # Root Layout + <meta>
│   ├── page.tsx            # Startseite (Hero, Leistungen, CTA)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Serverless Function (JSON-Echo)
│   └── (pages...)          # künftige Seiten, z. B. /preise, /blog
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Hero.tsx
│   ├── lib/
│   │   └── mailer.ts           # Platzhalter für Mail-Versand
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/…            # Logos, Hero-Bild
│   ├── robots.txt
│   └── manifest.webmanifest
├── .env.local              # z. B. MAIL_API_KEY=
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── next-sitemap.config.mjs
└── README.md
