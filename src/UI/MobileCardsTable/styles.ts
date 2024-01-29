'use client'

import styled, { css } from 'styled-components'

export const WrapperMobileCardsTable = styled.section`
  ${({ theme }) => css`
    margin-top: 4rem;

    div,
    section {
      display: grid;
      grid-template-columns: 40% 20% 20% 20%;
      gap: 1rem;
      padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    }

    div {
      p {
        color: ${theme.colors.darkGray};
        font-weight: ${theme.font.normal};
      }
    }

    section {
      margin-bottom: ${theme.spacings.xxsmall};
      border-radius: ${theme.spacings.xxsmall};
      background: ${theme.colors.white};
      color: ${theme.colors.darkGray};

      p {
        color: ${theme.colors.black};
      }

      h3 {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.normal};

        &.deposit {
          color: ${theme.colors.green};
        }

        &.withdraw {
          color: ${theme.colors.red};
        }
      }
    }

    @media screen and (max-width: 768px) {
      margin-top: ${theme.spacings.medium};

      div {
        padding: ${theme.spacings.xsmall} 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
          font-size: ${theme.font.sizes.xlarge};
          color: ${theme.colors.black};
        }
      }

      section {
        grid-template-columns: 1fr;
        gap: 2px;

        p,
        h3 {
          grid-column: span 2;
        }

        h3 {
          font-size: ${theme.font.sizes.xlarge};
          margin-bottom: ${theme.spacings.xsmall};
        }
      }
    }
  `}
`
