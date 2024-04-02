import { PropsWithChildren } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomeLayout({ children }: PropsWithChildren) {
  return children
}
