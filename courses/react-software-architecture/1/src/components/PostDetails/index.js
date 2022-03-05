import React from 'react'
import dayjs from 'dayjs'
import PrismicDOM from 'prismic-dom'

import { Container, Title, DetailsContainer, Detail } from './styled'

function getTimeEstimateFromContent(content) {
  if (!content?.length) {
    return 0
  }

  const wordCount = content.reduce((acc, section) => {
    const text = PrismicDOM.RichText.asText(section?.body)

    return acc + text.split(' ').length
  }, 0)

  return Math.ceil(wordCount / 200)
}

function getFormattedPublishDate(timestamp) {
  if (!dayjs(timestamp).isValid()) {
    return 'unknown'
  }

  return dayjs(timestamp).format('MMM YYYY').toLocaleLowerCase()
}

export function PostDetails({ post }) {
  if (!post) {
    return null
  }

  const readTimeEstimate = getTimeEstimateFromContent(post?.data?.content)
  const formattedDate = getFormattedPublishDate(post?.first_publication_date)

  return (
    <Container className="PostDetails">
      <Title>{post?.data?.title ?? '-'}</Title>

      <DetailsContainer>
        <Detail>
          <span className="material-icons">calendar_today</span> {formattedDate}
        </Detail>

        <Detail>
          <span className="material-icons">schedule</span> {readTimeEstimate}{' '}
          min read
        </Detail>
      </DetailsContainer>
    </Container>
  )
}
