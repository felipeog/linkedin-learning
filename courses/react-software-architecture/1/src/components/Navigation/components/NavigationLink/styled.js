import styled, { css } from 'styled-components'

function getAnchorStyles({ theme, isActive }) {
  const borderColor = isActive ? theme.grayDark : theme.grayLight
  const textColor = isActive ? theme.grayDark : theme.grayMedium

  return css`
    border: solid 0.2rem ${theme.grayLight};
    border-top-color: ${borderColor};
    color: ${textColor};
    font-weight: ${theme.fontRegular};
    transition: color ${theme.transitionDuration};

    &:hover {
      color: ${theme.grayDark};
    }
  `
}

export const Container = styled.a`
  display: flex;
  padding: 1rem 0;
  text-decoration: none;

  ${(props) => getAnchorStyles(props)}
`
