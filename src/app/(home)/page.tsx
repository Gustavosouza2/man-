'use client'

import { Flex } from '@chakra-ui/react'
import { Header } from '../layout/public/Header'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" bg="main.green.100">
      <Header />
    </Flex>
  )
}
