import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Anchor = styled(NavLink)`
  display: block;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitionDuration};

  &:hover {
    opacity: 0.6;
  }
`
