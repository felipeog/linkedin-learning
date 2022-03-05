import DOMPurify from 'dompurify'
import PrismicDOM from 'prismic-dom'

import { Container, Title } from './styled'

export function PostContentSection({ section }) {
  if (!section) {
    return null
  }

  const { heading, body } = section
  const formattedBody = DOMPurify.sanitize(PrismicDOM.RichText.asHtml(body))

  return (
    <Container className="PostContentSection">
      <Title>{heading}</Title>

      <div
        dangerouslySetInnerHTML={{
          __html: formattedBody,
        }}
      />
    </Container>
  )
}
