'use client'

import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonColors } from '.'

type WrapperButtonProps = {
  $color?: 'blue' | 'green' | 'gray'
}

const wrapperModifiersButton = {
  color: (theme: DefaultTheme, $color: ButtonColors) => css`
    background-color: ${theme.colors[$color]};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    padding: 0 2rem;
    border-radius: ${theme.border.radius};
    height: 48px;
    transition: filter 0.2s;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  `
}

export const WrapperButton = styled.button<WrapperButtonProps>`
  ${({ theme, $color }) => css`
    ${!!$color && wrapperModifiersButton.color(theme, $color)}
  `}
`
