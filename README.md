# Tmooona Website

A catalog website for **Tmooona** - a boutique art studio specializing in wall art, canvas prints, wall sculptures, clocks, and modern home decor. The design is inspired by [tmooona.co.il](https://tmooona.co.il).

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 with RTL support
- **Language**: Hebrew (RTL layout)
- **Data**: Static JSON (no database)
- **Hosting**: Vercel (free tier)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - hero section, category grid, featured products, newsletter |
| `/shop` | Shop - product grid with category filtering and sorting |
| `/shop/[slug]` | Product detail - image gallery, pricing, WhatsApp ordering |
| `/about` | About - studio story and philosophy |
| `/contact` | Contact - form + business info + WhatsApp link |
| `/gallery` | Gallery - customer homes photo grid |
| `/customers` | Customers - testimonials |

## Features

- Full Hebrew RTL layout with Rubik, Cardo, and Inter fonts
- Responsive design (mobile hamburger menu, adaptive grids)
- Category filtering and sorting via URL search params
- WhatsApp ordering button on product pages
- Static generation for all product pages (SSG)
- SEO metadata on every page

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Deploy

Import the GitHub repo on [Vercel](https://vercel.com) - it auto-detects Next.js and deploys on every push to `main`.

## Project Structure

```
src/
  app/            # Pages (App Router)
  components/     # React components (layout, home, shop, product, contact, ui)
  data/           # Static data (products.json, categories.json, site-config.ts)
  lib/            # Utility functions (products, categories, utils)
  types/          # TypeScript interfaces
```
