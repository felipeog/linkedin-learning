import dayjs from 'dayjs'

import { IconWithLabel } from '../../../../components/IconWithLabel'
import { Container } from './styled'

export default function MetadataContent({ post }) {
  if (!post) {
    return null
  }

  function getFormattedDate(timestamp) {
    if (!dayjs(timestamp).isValid()) {
      return null
    }

    return dayjs(timestamp).format('YYYY/MM/DD hh:mm:ss')
  }

  const fallbacklabel = 'unknown'
  const metadatas = [
    {
      iconName: 'person',
      label: `author: ${post?.data?.author ?? fallbacklabel}`,
    },
    {
      iconName: 'calendar_today',
      label: `first publication: ${
        getFormattedDate(post?.first_publication_date) ?? fallbacklabel
      }`,
    },
    {
      iconName: 'calendar_today',
      label: `last publication: ${
        getFormattedDate(post?.last_publication_date) ?? fallbacklabel
      }`,
    },
    {
      iconName: 'language',
      label: `language: ${post?.lang ?? fallbacklabel}`,
    },
  ]

  return (
    <Container className="MetadataContent">
      {metadatas.map((metadata) => (
        <li key={metadata.label}>
          <IconWithLabel {...metadata} />
        </li>
      ))}
    </Container>
  )
}
