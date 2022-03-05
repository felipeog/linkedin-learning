import React from 'react'

import { Container } from './styled'

export function Page({ children, as = 'div', className }) {
  return (
    <Container className={`Page ${className ?? ''}`} as={as}>
      {children}
    </Container>
  )
}
