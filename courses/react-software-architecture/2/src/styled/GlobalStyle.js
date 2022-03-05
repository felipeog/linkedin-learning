import { createGlobalStyle, css } from 'styled-components'

function getHtmlStyles({ theme }) {
  return css`
    html {
      background-color: ${theme.grayLight};
      font-size: 16px;
      font-family: ${theme.fontFamily};
      font-weight: ${theme.fontRegular};
      color: ${theme.grayDark};
    }
  `
}

function getTypographyStyles({ theme }) {
  return css`
    h1 {
      color: ${theme.grayDark};
      font-size: 1.6rem;
      font-weight: ${theme.fontBold};
      line-height: 2rem;
    }

    h2 {
      color: ${theme.grayDark};
      font-size: 1.2rem;
      font-weight: ${theme.fontBold};
      line-height: 1.6rem;
    }

    p {
      color: ${theme.grayMedium};
      font-size: 1rem;
      line-height: 1.4rem;
    }

    input,
    textarea,
    button {
      font-family: ${theme.fontFamily};
      font-size: 1rem;
    }
  `
}

export const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* reset end */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ${(props) => getHtmlStyles(props)}
  ${(props) => getTypographyStyles(props)}
`
