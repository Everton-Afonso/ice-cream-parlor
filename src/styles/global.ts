'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      scroll-behavior: smooth;

      @media screen and (max-width: 1080px) {
        font-size: 93.75%; //15px
      }

      @media screen and (max-width: 720px) {
        font-size: 87.5%; //14px
      }
    }

    body {
      background: ${theme.colors.mainBg};
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
    }

    button {
      cursor: pointer;
    }
  `}
`}`

export default GlobalStyles
