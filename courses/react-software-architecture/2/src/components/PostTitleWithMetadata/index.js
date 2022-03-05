import dayjs from 'dayjs'
import PrismicDOM from 'prismic-dom'

import { IconWithLabel } from '../IconWithLabel'
import { Title, MetadataContainer } from './styled'

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

export function PostTitleWithMetadata({ post }) {
  if (!post) {
    return null
  }

  const readTimeEstimate = getTimeEstimateFromContent(post?.data?.content)
  const formattedDate = getFormattedPublishDate(post?.first_publication_date)

  return (
    <article className="PostTitleWithMetadata">
      <Title>{post?.data?.title ?? '-'}</Title>

      <MetadataContainer>
        <IconWithLabel iconName="calendar_today" label={formattedDate} />
        <IconWithLabel
          iconName="schedule"
          label={`${readTimeEstimate} min read`}
        />
      </MetadataContainer>
    </article>
  )
}
