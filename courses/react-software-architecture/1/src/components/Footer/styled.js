import styled, { css } from 'styled-components'

function getFooterStyles({ theme }) {
  return css`
    color: ${theme.grayMedium};
  `
}

export const Container = styled.footer`
  padding: 1rem 0;

  ${(props) => getFooterStyles(props)}
`
