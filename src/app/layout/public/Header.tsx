'use client'

import { Flex, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      borderBottom="1px solid #73777D"
      alignItems="center"
      justify="flex-end"
      bg="transparent"
      height="5rem"
      width="100%"
    >
      <Flex mr="5.9rem" gap="1.9rem">
        <Text textColor="main.cyan.100" cursor="pointer" fontSize="1.1rem">
          clientes
        </Text>
      </Flex>
    </Flex>
  )
}
