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

    input {
      width: 100%;
      padding: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.medium};
      line-height: 1.25rem;
      border-radius: ${theme.border.radius};
    }

    button {
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: ${theme.colors.mainBg};
      padding: ${theme.spacings.xxlarge} ${theme.spacings.xlarge};
      position: relative;
      border-radius: ${theme.border.radius};
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`}`

export default GlobalStyles
