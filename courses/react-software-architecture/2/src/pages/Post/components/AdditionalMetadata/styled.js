import styled, { css } from 'styled-components'

function getButtonStyles({ theme }) {
  return css`
    transition: color ${theme.transitionDuration};
    color: ${theme.grayMedium};

    &:hover {
      color: ${theme.grayDark};
    }
  `
}

export const Container = styled.ul`
  margin-top: 1rem;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.8rem;
  
  ${(props) => getButtonStyles(props)}
}
`

export const LoadingText = styled.p`
  font-size: 0.8rem;
`
