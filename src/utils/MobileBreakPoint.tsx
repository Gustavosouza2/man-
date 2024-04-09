import { useMediaQuery } from '@chakra-ui/react'

export const useMobileBreakPoint = () => {
  const [isMobile] = useMediaQuery('(min-width: 480px)', {
    fallback: false,
    ssr: true,
  })
  return !isMobile
}
