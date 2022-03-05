import { useState, Suspense } from 'react'

import { Icon } from '../../../../components/Icon'
import { lazyImportWithDelay } from '../../../../utils/lazyImportWithDelay'
import { MetadataErrorBoundary } from '../MetadataErrorBoundary'
import { Container, Button, LoadingText } from './styled'

const MetadataContent = lazyImportWithDelay(() => import('../MetadataContent'))

export function AdditionalMetadata({ post }) {
  const [isMetadataOpen, setIsMetadataOpen] = useState(false)

  function toggleMetadata() {
    setIsMetadataOpen(
      (prevShowAdditionalMetadata) => !prevShowAdditionalMetadata
    )
  }

  return (
    <Container className="AdditionalMetadata">
      <Button onClick={toggleMetadata}>
        additional metadata{' '}
        <Icon iconName={isMetadataOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
      </Button>

      {isMetadataOpen && (
        <MetadataErrorBoundary>
          <Suspense fallback={<LoadingText>loading...</LoadingText>}>
            <MetadataContent post={post} />
          </Suspense>
        </MetadataErrorBoundary>
      )}
    </Container>
  )
}
