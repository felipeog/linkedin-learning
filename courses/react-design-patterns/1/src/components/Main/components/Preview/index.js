import { marked } from 'marked'
import DOMPurify from 'dompurify'

import './index.css'

export function Preview({ rawMarkdown }) {
  return (
    <div
      className="Preview"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(rawMarkdown)),
      }}
    />
  )
}
