---
title: Building this portfolio with Next.js
date: 2026-03-26
excerpt: Notes on how this site is organized and why the app router structure makes adding pages straightforward.
tags: nextjs, frontend, setup
---

## The simple mental model

This site is built with Next.js, which means each folder under `app` can become a route.

- `app/page.tsx` is the homepage
- `app/blog/page.tsx` is the blog index page
- `app/blog/[slug]/page.tsx` is the template for individual posts

## Why that matters

Once the routing is in place, adding content becomes much easier:

1. Create a markdown file in `content/blog`
2. Give it a title, date, excerpt, and tags in the frontmatter
3. Write the post body
4. Open `/blog` and the post will appear in the list

## Example frontmatter

```md
---
title: My New Post
date: 2026-03-27
excerpt: A short summary for the blog index page.
tags: notes, machine-learning
---
```

This keeps the site simple. The structure is still code-based, but the actual writing is in markdown instead of being hardcoded inside React components.
