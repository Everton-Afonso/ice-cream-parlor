'use client'

import styled, { css } from 'styled-components'
import * as ButtonStyles from '../../UI/Button/styles'

export const WrapperHeader = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    section {
      max-width: ${theme.grid.container};
      margin: 0 auto;
      padding: 0 ${theme.spacings.xsmall} 7rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;

        span {
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.medium};
          font-style: normal;
          font-weight: ${theme.font.bold};
          line-height: normal;
        }
      }

      ${ButtonStyles.WrapperButton} {
        max-width: 195px;
      }
    }
  `}
`
