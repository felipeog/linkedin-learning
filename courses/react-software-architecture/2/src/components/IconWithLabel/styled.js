import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.grayMedium};

  .Icon {
    display: inline-block;
    margin-right: 0.4rem;
    font-size: 1.2rem;
  }
`
