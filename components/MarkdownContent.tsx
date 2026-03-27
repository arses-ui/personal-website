import Link from 'next/link'
import type { ReactNode } from 'react'

type MarkdownBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'unordered-list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'divider' }

type MarkdownContentProps = {
  content: string
}

const blockStartPatterns = [/^#{1,3}\s+/, /^- /, /^\d+\. /, /^> /, /^```/, /^---$/]

function isBlockStart(line: string) {
  return blockStartPatterns.some((pattern) => pattern.test(line))
}

function parseBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const blocks: MarkdownBlock[] = []

  let index = 0

  while (index < lines.length) {
    const line = lines[index].trimEnd()

    if (!line.trim()) {
      index += 1
      continue
    }

    if (line === '---') {
      blocks.push({ type: 'divider' })
      index += 1
      continue
    }

    const codeFenceMatch = line.match(/^```([\w-]*)/)
    if (codeFenceMatch) {
      const codeLines: string[] = []
      index += 1

      while (index < lines.length && !lines[index].startsWith('```')) {
        codeLines.push(lines[index])
        index += 1
      }

      if (index < lines.length) {
        index += 1
      }

      blocks.push({
        type: 'code',
        language: codeFenceMatch[1] || 'text',
        code: codeLines.join('\n').trimEnd(),
      })
      continue
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.*)$/)
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length as 1 | 2 | 3,
        text: headingMatch[2].trim(),
      })
      index += 1
      continue
    }

    if (line.startsWith('- ')) {
      const items: string[] = []

      while (index < lines.length && lines[index].trimStart().startsWith('- ')) {
        items.push(lines[index].trimStart().slice(2).trim())
        index += 1
      }

      blocks.push({ type: 'unordered-list', items })
      continue
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = []

      while (index < lines.length && /^\d+\. /.test(lines[index].trimStart())) {
        items.push(lines[index].trimStart().replace(/^\d+\.\s+/, '').trim())
        index += 1
      }

      blocks.push({ type: 'ordered-list', items })
      continue
    }

    if (line.startsWith('> ')) {
      const quoteLines: string[] = []

      while (index < lines.length && lines[index].trimStart().startsWith('> ')) {
        quoteLines.push(lines[index].trimStart().slice(2).trim())
        index += 1
      }

      blocks.push({ type: 'blockquote', text: quoteLines.join(' ') })
      continue
    }

    const paragraphLines: string[] = []

    while (index < lines.length) {
      const currentLine = lines[index].trim()

      if (!currentLine || isBlockStart(currentLine)) {
        break
      }

      paragraphLines.push(currentLine)
      index += 1
    }

    blocks.push({
      type: 'paragraph',
      text: paragraphLines.join(' '),
    })
  }

  return blocks
}

function renderInline(text: string): ReactNode[] {
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*)/g
  const parts: ReactNode[] = []

  let lastIndex = 0
  let match: RegExpExecArray | null = pattern.exec(text)

  while (match) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[2] && match[3]) {
      const label = match[2]
      const href = match[3]
      const isExternal = href.startsWith('http')

      parts.push(
        isExternal ? (
          <a
            key={`${href}-${match.index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {label}
          </a>
        ) : (
          <Link
            key={`${href}-${match.index}`}
            href={href}
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {label}
          </Link>
        )
      )
    } else if (match[4]) {
      parts.push(
        <code
          key={`code-${match.index}`}
          className="rounded-md bg-neutral-100 px-1.5 py-1 text-[0.95em] text-text-primary"
        >
          {match[4]}
        </code>
      )
    } else if (match[5]) {
      parts.push(
        <strong key={`strong-${match.index}`} className="font-semibold text-text-primary">
          {match[5]}
        </strong>
      )
    }

    lastIndex = pattern.lastIndex
    match = pattern.exec(text)
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = parseBlocks(content)

  return (
    <div className="space-y-6 text-base leading-8 text-text-secondary">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          const headingClassNames = {
            1: 'text-3xl md:text-4xl font-serif font-semibold text-text-primary tracking-tight',
            2: 'text-2xl md:text-3xl font-serif font-semibold text-text-primary tracking-tight',
            3: 'text-xl md:text-2xl font-serif font-semibold text-text-primary tracking-tight',
          }

          if (block.level === 1) {
            return <h1 key={index} className={headingClassNames[1]}>{renderInline(block.text)}</h1>
          }

          if (block.level === 2) {
            return <h2 key={index} className={headingClassNames[2]}>{renderInline(block.text)}</h2>
          }

          return <h3 key={index} className={headingClassNames[3]}>{renderInline(block.text)}</h3>
        }

        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-base leading-8 text-text-secondary">
              {renderInline(block.text)}
            </p>
          )
        }

        if (block.type === 'unordered-list') {
          return (
            <ul key={index} className="space-y-3 pl-6 text-base leading-8 text-text-secondary list-disc marker:text-accent">
              {block.items.map((item, itemIndex) => (
                <li key={`${index}-${itemIndex}`}>{renderInline(item)}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'ordered-list') {
          return (
            <ol key={index} className="space-y-3 pl-6 text-base leading-8 text-text-secondary list-decimal marker:text-accent">
              {block.items.map((item, itemIndex) => (
                <li key={`${index}-${itemIndex}`}>{renderInline(item)}</li>
              ))}
            </ol>
          )
        }

        if (block.type === 'blockquote') {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-accent/30 pl-5 italic text-text-secondary"
            >
              {renderInline(block.text)}
            </blockquote>
          )
        }

        if (block.type === 'code') {
          return (
            <div key={index} className="overflow-hidden rounded-2xl border border-neutral-200 bg-text-primary text-warm-white">
              <div className="border-b border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                {block.language}
              </div>
              <pre className="overflow-x-auto p-4 text-sm leading-7">
                <code>{block.code}</code>
              </pre>
            </div>
          )
        }

        return <hr key={index} className="border-neutral-200" />
      })}
    </div>
  )
}
