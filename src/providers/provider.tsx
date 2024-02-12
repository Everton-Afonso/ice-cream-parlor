'use client'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import StyledComponentsRegistry from '@/lib/registry'

import { ModalProvider } from '@/context/providerModal'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <GlobalStyles />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}
