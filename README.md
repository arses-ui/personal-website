# Arses Prasai - Personal Portfolio

A sleek, modern personal portfolio website built with Next.js, featuring a dark theme with electric cyan accents.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is ready to be deployed on Vercel, Netlify, or any modern hosting platform.

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Add your custom domain in the Vercel dashboard

### Netlify Deployment

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add your custom domain in the Netlify dashboard

## Features

- Dark mode theme with electric cyan accents
- Smooth scrolling and animations
- Responsive design
- Single-page application
- Optimized for performance (targeting 95+ Lighthouse scores)

## Blog

The blog now uses markdown files stored in `content/blog`.

Each post needs a small frontmatter block at the top:

```md
---
title: My Post Title
date: 2026-03-27
excerpt: One or two sentences that appear on the blog index page.
tags: notes, engineering
---
```

The filename becomes the URL slug:

- `content/blog/my-post-title.md` -> `/blog/my-post-title`

The blog index page lives at `/blog`, and every post is listed there automatically.
