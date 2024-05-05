'use client'

import { FaRegCircleUser } from 'react-icons/fa6'
import { IoMenu, IoPeople } from 'react-icons/io5'
import {
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Menu,
  Box,
} from '@chakra-ui/react'

import { useMobileBreakPoint } from '@/utils/MobileBreakPoint'
import { PropsWithChildren } from 'react'
import Link from 'next/link'

const TitleHeader = ({ children }: PropsWithChildren) => {
  return (
    <Text
      _hover={{ transform: 'scale(1.10)', textDecoration: 'none' }}
      transition="transform 300ms ease-in-out"
      fontFamily="var(--font-montagu_slab)"
      textColor="#000000"
      fontSize="0.8rem"
      cursor="pointer"
      fontWeight="500"
    >
      {children}
    </Text>
  )
}

export const Header = () => {
  const isMobile = useMobileBreakPoint()

  return (
    <Flex
      justifyContent="space-between"
      bg="transparent"
      height="7rem"
      width="100vw"
    >
      {isMobile && (
        <Flex
          justify={['flex-end', 'center']}
          mr={['1.2rem', '0rem']}
          alignItems="center"
          w="100%"
        >
          <Menu>
            <MenuButton
              icon={<IoMenu color="#000000" fontSize="2.5rem" />}
              _active={{ bgColor: 'transparent' }}
              _hover={{ bgColor: 'transparent' }}
              aria-label="Options"
              as={IconButton}
              variant="ghost"
            />
            <MenuList bg="main.beige.100">
              <MenuItem
                icon={<IoPeople color="#000" fontSize="1.5rem" />}
                fontFamily="var(--font-montagu_slab)"
                bg="main.beige.100"
                fontWeight={600}
              >
                <Link href="./">Clientes</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
      <Flex
        hidden={!!isMobile}
        position="relative"
        alignItems="center"
        justify="center"
        gap="1.9rem"
        w="100%"
      >
        <TitleHeader>HOME</TitleHeader>
        <TitleHeader>CLIENTES</TitleHeader>
        <TitleHeader>PAY</TitleHeader>
        <TitleHeader>ORDER</TitleHeader>
        <TitleHeader>STORE</TitleHeader>

        <Box justifyContent="end" position="absolute" right={60}>
          <FaRegCircleUser />
        </Box>
      </Flex>
    </Flex>
  )
}
