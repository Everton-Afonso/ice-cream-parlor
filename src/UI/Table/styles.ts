'use client'

import styled, { css } from 'styled-components'

export const WrapperTable = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;

    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: ${theme.colors.darkGray};
        font-weight: ${theme.font.normal};
        padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
        text-align: left;
        line-height: 1.5rem;
      }

      td {
        padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
        border: 0;
        background: ${theme.colors.white};
        color: ${theme.colors.darkGray};

        &:first-child {
          color: ${theme.colors.black};
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        &:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        &.deposit {
          color: ${theme.colors.green};
        }

        &.withdraw {
          color: ${theme.colors.red};
        }
      }
    }
  `}
`
