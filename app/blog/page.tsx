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
                <p className="body-text max-w-3xl">
                  I started my ML journey less than a year ago, and it&apos;s been quite the ride.
                  This blog is where I put down things I&apos;ve been reading, concepts I find
                  interesting, and ideas that helped sharpen my intuition on certain topics. What I
                  write is partly for anyone who stumbles across it, but more so for myself: to
                  make sense of, and put down in words, what I think I understand. As a result,
                  everything here is written in my own words; any AI involvement stays strictly at
                  the level of grammar and clarity, nothing more.
                </p>
              </div>
            </div>
          </section>

          {posts.length > 0 && (
            <section className="space-y-4">
              {posts.map((post) => (
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
              ))}
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
