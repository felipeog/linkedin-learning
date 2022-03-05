import styled from 'styled-components'

export const Container = styled.article``

export const Title = styled.h1`
  margin-bottom: 1rem;
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

  > div:not(:first-child) {
    margin-left: 2rem;
  }
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.grayMedium};

  .material-icons {
    display: inline-block;
    margin-right: 0.4rem;
    font-size: 1.2rem;
  }
`
