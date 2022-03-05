import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { Container } from './styled'

export function NavigationLink({ to, children, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  })

  return (
    <Container isActive={match} href={to} className="NavigationLink">
      {children}
    </Container>
  )
}
