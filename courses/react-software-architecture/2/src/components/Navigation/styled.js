import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

function getNavigationLinkStyles({ theme }) {
  return css`
    border: solid 0.2rem ${theme.grayLight};
    border-top-color: ${theme.grayLight};
    color: ${theme.grayMedium};
    font-weight: ${theme.fontRegular};
    transition: color ${theme.transitionDuration};

    &:hover {
      color: ${theme.grayDark};
    }

    &.active {
      border-top-color: ${theme.grayDark};
      color: ${theme.grayDark};
    }
  `
}

export const Container = styled.ul`
  display: flex;

  li:not(:first-child) {
    margin-left: 1rem;
  }
`

export const NavigationLink = styled(NavLink)`
  display: flex;
  padding: 1rem 0;
  text-decoration: none;

  ${(props) => getNavigationLinkStyles(props)}
`
