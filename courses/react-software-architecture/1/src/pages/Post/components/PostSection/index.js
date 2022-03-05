import React from 'react'
import DOMPurify from 'isomorphic-dompurify'
import PrismicDOM from 'prismic-dom'

import { Container, Title } from './styled'

export function PostSection({ section }) {
  if (!section) {
    return null
  }

  const { heading, body } = section
  const formattedBody = DOMPurify.sanitize(PrismicDOM.RichText.asHtml(body))

  return (
    <Container className="PostSection">
      <Title>{heading}</Title>

      <div
        dangerouslySetInnerHTML={{
          __html: formattedBody,
        }}
      />
    </Container>
  )
}
