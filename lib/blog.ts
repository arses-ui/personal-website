import fs from 'node:fs'
import path from 'node:path'

const blogDirectory = path.join(process.cwd(), 'content', 'blog')

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export type BlogPost = BlogPostMeta & {
  content: string
}

type Frontmatter = {
  title: string
  date: string
  excerpt: string
  tags: string[]
}

const emptyFrontmatter: Frontmatter = {
  title: '',
  date: '',
  excerpt: '',
  tags: [],
}

function parseFrontmatter(fileContents: string): {
  frontmatter: Frontmatter
  content: string
} {
  const normalizedContents = fileContents.replace(/\r\n/g, '\n')
  const match = normalizedContents.match(/^---\n([\s\S]*?)\n---\n?/)

  if (!match) {
    return {
      frontmatter: emptyFrontmatter,
      content: normalizedContents.trim(),
    }
  }

  const frontmatterBlock = match[1]
  const content = normalizedContents.slice(match[0].length).trim()

  const frontmatter = frontmatterBlock.split('\n').reduce<Frontmatter>((acc, line) => {
    const separatorIndex = line.indexOf(':')

    if (separatorIndex === -1) {
      return acc
    }

    const key = line.slice(0, separatorIndex).trim()
    const rawValue = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '')

    if (key === 'tags') {
      acc.tags = rawValue
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
      return acc
    }

    if (key === 'title' || key === 'date' || key === 'excerpt') {
      acc[key] = rawValue
    }

    return acc
  }, { ...emptyFrontmatter })

  return { frontmatter, content }
}

function getPostPath(slug: string) {
  return path.join(blogDirectory, `${slug}.md`)
}

function sortPostsByDate(posts: BlogPostMeta[]) {
  return posts.sort((left, right) => {
    const leftTime = new Date(left.date).getTime()
    const rightTime = new Date(right.date).getTime()
    return rightTime - leftTime
  })
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(blogDirectory).filter((filename) => filename.endsWith('.md'))

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const fileContents = fs.readFileSync(getPostPath(slug), 'utf8')
    const { frontmatter, content } = parseFrontmatter(fileContents)

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || '',
      excerpt: frontmatter.excerpt || content.slice(0, 140),
      tags: frontmatter.tags,
    }
  })

  return sortPostsByDate(posts)
}

export function getPostBySlug(slug: string): BlogPost | null {
  const postPath = getPostPath(slug)

  if (!fs.existsSync(postPath)) {
    return null
  }

  const fileContents = fs.readFileSync(postPath, 'utf8')
  const { frontmatter, content } = parseFrontmatter(fileContents)

  return {
    slug,
    title: frontmatter.title || slug,
    date: frontmatter.date || '',
    excerpt: frontmatter.excerpt || content.slice(0, 140),
    tags: frontmatter.tags,
    content,
  }
}

export function formatBlogDate(date: string) {
  if (!date) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}
