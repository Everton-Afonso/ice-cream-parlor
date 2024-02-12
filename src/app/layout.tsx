import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Providers } from '@/providers/provider'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Sorveteria Vila Boca Gelada',
  description: 'A melhor sorveteria de Douradinho MG'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={isDev}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
