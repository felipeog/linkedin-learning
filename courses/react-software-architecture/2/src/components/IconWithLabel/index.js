import { Icon } from '../Icon'

import { Container } from './styled'

export function IconWithLabel({ iconName, label }) {
  return (
    <Container className="IconWithLabel">
      <Icon iconName={iconName} /> {label}
    </Container>
  )
}
