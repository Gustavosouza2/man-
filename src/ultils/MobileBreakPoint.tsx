import { useMediaQuery } from '@chakra-ui/react'

export const useMobileBreakPoint = () => {
  const [isMobile] = useMediaQuery('(min-width: 768px)')
  return isMobile
}
