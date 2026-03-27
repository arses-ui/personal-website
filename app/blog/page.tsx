import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { formatBlogDate, getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Arses Prasai',
  description: 'Writing on machine learning, research, and building thoughtful systems.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-warm-white pt-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto pb-16">
          <section className="pb-6">
            <div className="bento-card space-y-4">
              <div className="status-badge">Blog</div>
              <div className="space-y-2">
                <h1 className="section-heading">Notes, essays, and build logs</h1>
                <p className="body-text max-w-2xl">
                  This page lists every post. Each title opens its own page, so the blog can grow
                  separately from the homepage.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            {posts.length === 0 ? (
              <div className="bento-card">
                <h2 className="text-xl font-serif font-semibold text-text-primary">No posts yet</h2>
                <p className="mt-2 body-text">
                  Add a markdown file to <code className="rounded bg-neutral-100 px-1.5 py-1 text-sm text-text-primary">content/blog</code> and it will show up here.
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bento-card group block hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-text-muted">
                        <span>{formatBlogDate(post.date)}</span>
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] tracking-[0.14em] text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <h2 className="text-2xl font-serif font-semibold text-text-primary transition-colors group-hover:text-accent">
                          {post.title}
                        </h2>
                        <p className="mt-2 body-text">{post.excerpt}</p>
                      </div>
                    </div>

                    <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              ))
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
