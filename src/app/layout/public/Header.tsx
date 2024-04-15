'use client'

import { IoMenu, IoPeople } from 'react-icons/io5'
import {
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Menu,
} from '@chakra-ui/react'

import { useMobileBreakPoint } from '@/utils/MobileBreakPoint'
import { CasaLogo } from '../assets/CasaLogo'
import Link from 'next/link'

export const Header = () => {
  const isMobile = useMobileBreakPoint()

  return (
    <Flex
      borderBottom="1px solid #ECD0B3"
      bg="transparent"
      height="5rem"
      width="100vw"
    >
      <CasaLogo />
      {isMobile && (
        <Flex alignItems="center" justify="flex-end" w="100%" mr="2rem">
          <Menu>
            <MenuButton
              icon={<IoMenu color="#ECD0B3" fontSize="2.5rem" />}
              _active={{ bgColor: 'transparent' }}
              _hover={{ bgColor: 'transparent' }}
              aria-label="Options"
              as={IconButton}
              variant="ghost"
            />
            <MenuList>
              <MenuItem
                icon={<IoPeople color="#000" fontSize="1.5rem" />}
                fontFamily="var(--font-inter)"
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
        alignItems="center"
        justify="flex-end"
        gap="1.9rem"
        mr="7rem"
        w="100%"
      >
        <Text textColor="main.beige.100" cursor="pointer" fontSize="1.3rem">
          Clientes
        </Text>
      </Flex>
    </Flex>
  )
}
