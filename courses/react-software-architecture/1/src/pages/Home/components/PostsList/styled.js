import styled from 'styled-components'

export const Container = styled.section`
  > a:not(:first-child) {
    margin-top: 4rem;
  }
`

export const Anchor = styled.a`
  display: block;
  text-decoration: none;
  transition: opacity ${({ theme }) => theme.transitionDuration};

  &:hover {
    opacity: 0.6;
  }
`
