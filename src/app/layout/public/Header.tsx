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
import { useMobileBreakPoint } from '@/ultils/MobileBreakPoint'

export const Header = () => {
  const isMobile = useMobileBreakPoint()

  return (
    <Flex
      borderBottom="1px solid #73777D"
      alignItems="center"
      justify="flex-end"
      bg="transparent"
      height="5rem"
      width="100%"
    >
      {!isMobile && (
        <Flex mr="1.5rem">
          <Menu>
            <MenuButton
              icon={<IoMenu color="#FFF" fontSize="2.5rem" />}
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
                Clientes
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
      <Flex mr="5.9rem" gap="1.9rem" hidden={!isMobile}>
        <Text textColor="main.cyan.100" cursor="pointer" fontSize="1.1rem">
          clientes
        </Text>
      </Flex>
    </Flex>
  )
}
