'use client'

import styled, { DefaultTheme, css } from 'styled-components'

type WrapperCardProps = {
  $type: 'Entrada' | 'Saida' | 'Total'
}

const wrapperCardModifiers = {
  Entrada: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
  `,

  Saida: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
  `,

  Total: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `
}

export const WrapperCard = styled.div<WrapperCardProps>`
  ${({ theme, $type }) => css`
    padding: 1.5rem 2rem;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: ${theme.font.sizes.medium};
        font-style: normal;
        font-weight: ${theme.font.normal};
        line-height: normal;
      }
    }

    strong {
      font-size: 2rem;
      font-style: normal;
      font-weight: ${theme.font.semiBold};
      line-height: normal;
    }

    ${!!$type && wrapperCardModifiers[$type](theme)}
  `}
`
