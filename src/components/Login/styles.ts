'use client'

import styled, { css } from 'styled-components'
import * as StylesButton from '@/UI/Button/styles'

export const WrapperLogin = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      background-color: ${theme.colors.white};
      display: block;
      padding: ${theme.spacings.xsmall};
      margin: 0 ${theme.spacings.xsmall};
      width: 100%;
      max-width: 500px;
      border-radius: ${theme.border.radius};
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);

      p {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: ${theme.font.bold};
        text-align: center;
        color: ${theme.colors.black};
        padding: ${theme.spacings.xsmall} 0;
      }

      div {
        position: relative;

        input {
          width: 100%;
          background-color: ${theme.colors.lightGray};
          border: 1px solid ${theme.colors.gray};
          padding: ${theme.spacings.xsmall};
          font-size: ${theme.font.sizes.medium};
          line-height: 1.25rem;
          border-radius: ${theme.border.radius};
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
      }

      input,
      button {
        outline: none;
        margin: 8px 0;
      }

      ${StylesButton.WrapperButton} {
        height: 52px;
        line-height: 1.25rem;
        text-transform: uppercase;
      }
    }
  `}
`
