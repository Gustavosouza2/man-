import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import { useMobileBreakPoint } from '@/utils/MobileBreakPoint'
import { Button } from '../Button/Button'
import Coffee from '../utils/Coffee.png'

export const CardHome = () => {
  const isMobile = useMobileBreakPoint()

  return (
    <Grid
      templateColumns="1fr 1fr"
      px={['2.5rem', '5rem']}
      alignItems="center"
      mt={-6}
      w="80%"
      h="80%"
    >
      <GridItem colSpan={1}>
        <Flex flexDirection="column" alignItems="flex-start" gap="2.5rem">
          <Text
            fontFamily="var(--font-montagu_slab)"
            fontWeight={[400, 300]}
            fontSize="3.75rem"
            color="#000000"
            lineHeight="2rem"
          >
            MANÁ COFFEE
          </Text>
          <Text
            fontFamily="var(--font-montagu_slab)"
            fontSize={['0.813rem', '1.25rem']}
            fontWeight={400}
            color="#000000"
          >
            He examines an estate and buys it; he plants a vineyard with the
            fruit of his hands. <br />
            &nbsp;
            <br />
            &nbsp; Proverbs 31:16
          </Text>
          <Button variant="primary">
            <Text
              fontFamily="var(--font-montagu_slab)"
              fontSize="0.875rem"
              fontWeight={300}
              color="white"
            >
              CUSTOMERS
            </Text>
          </Button>
        </Flex>
      </GridItem>

      <GridItem colSpan={1} hidden={!!isMobile}>
        <Flex justifyContent="flex-end">
          <Image
            quality={100}
            src={Coffee}
            height={170}
            alt="coffee"
            width={300}
          />
        </Flex>
      </GridItem>
    </Grid>
  )
}
