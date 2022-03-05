import { PostTitleWithMetadata } from '../../../../components/PostTitleWithMetadata'

import { Anchor } from './styled'

export function PostsListItem({ post }) {
  return (
    <Anchor className="PostsListItem" to={`/post/${post?.uid}`}>
      <PostTitleWithMetadata post={post} />
    </Anchor>
  )
}
