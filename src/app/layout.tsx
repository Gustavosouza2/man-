import { Provider } from './providers/provider'
import { Montagu_Slab } from 'next/font/google'
import type { Metadata } from 'next'

const montagu = Montagu_Slab({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-montagu_slab',
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
    <html lang="pt">
      <body className={montagu.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
