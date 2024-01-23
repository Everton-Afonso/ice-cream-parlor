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

  ${() => css`
    html,
    body {
      height: 100%;
    }

    html {
      scroll-behavior: smooth;
    }
  `}
`}`

export default GlobalStyles
