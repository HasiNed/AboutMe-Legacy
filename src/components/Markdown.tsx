import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({ html: true })

export default function Markdown({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  return (
    <article
      className={'markdown-body' + (className ? ' ' + className : '')}
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  )
}
