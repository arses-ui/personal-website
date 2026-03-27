import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from '@/components/Footer'
import MarkdownContent from '@/components/MarkdownContent'
import Navigation from '@/components/Navigation'
import { formatBlogDate, getAllPosts, getPostBySlug } from '@/lib/blog'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Arses Prasai',
    }
  }

  return {
    title: `${post.title} | Arses Prasai`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const morePosts = getAllPosts()
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-warm-white pt-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto pb-16">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </div>

          <article className="bento-card space-y-8">
            <header className="space-y-5">
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

              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-text-primary">
                  {post.title}
                </h1>
                <p className="text-lg leading-8 text-text-secondary">{post.excerpt}</p>
              </div>
            </header>

            <MarkdownContent content={post.content} />
          </article>

          {morePosts.length > 0 && (
            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-text-primary">Keep reading</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {morePosts.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/blog/${entry.slug}`}
                    className="bento-card group block hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-text-muted">
                          {formatBlogDate(entry.date)}
                        </p>
                        <h3 className="mt-2 text-xl font-serif font-semibold text-text-primary transition-colors group-hover:text-accent">
                          {entry.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-text-secondary">
                          {entry.excerpt}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
