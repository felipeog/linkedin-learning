import { PostContentSection } from '../PostContentSection'
import { Container } from './styled'

export function PostContent({ content }) {
  if (!content?.length) {
    return null
  }

  return (
    <Container className="PostContent">
      {content?.map((section) => (
        <PostContentSection key={section?.heading} section={section} />
      ))}
    </Container>
  )
}
