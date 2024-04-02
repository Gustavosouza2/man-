import { Provider } from './providers/provider'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: {
    template: '%s | Canteen',
    default: 'Canteen',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.className} lang="pt">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
