'use client'

import styled, { css } from 'styled-components'

export const WrapperDashboard = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
  `}
`
