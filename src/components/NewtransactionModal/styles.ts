'use client'

import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'

import * as StylesButton from '@/UI/Button/styles'

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      padding-bottom: ${theme.spacings.small};
    }

    input {
      background: ${theme.colors.lightGray};
      border: 1px solid ${theme.colors.gray};
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${StylesButton.WrapperButton} {
      height: 52px;
      line-height: 1.25rem;
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`

export const TransactinTypeContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.xxsmall};

    ${StylesButton.WrapperButton} {
      background: ${theme.colors.mainBg};
      border: 1px solid ${theme.colors.gray};
      color: ${theme.colors.black};

      &.deposit {
        background: ${transparentize(0.9, `${theme.colors.green}`)};
      }

      &.withdraw {
        background: ${transparentize(0.9, `${theme.colors.red}`)};
      }

      &:hover {
        filter: none;
        border-color: ${darken(0.1, `${theme.colors.gray}`)};
      }
    }
  `}
`
