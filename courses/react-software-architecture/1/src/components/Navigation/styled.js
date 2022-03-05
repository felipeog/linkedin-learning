import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;

  li:not(:first-child) {
    margin-left: 1rem;
  }
`
