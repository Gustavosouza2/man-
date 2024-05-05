'use client'

import { Flex } from '@chakra-ui/react'

import { Header } from '../layout/public/Header'
import { CardHome } from '@/components'

export default function Home() {
  return (
    <Flex
      alignItems="center"
      bg="main.beige.100"
      flexDir="column"
      h="100vh"
      w="100vw"
    >
      <Header />

      <CardHome />
    </Flex>
  )
}
