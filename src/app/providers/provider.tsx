import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/components/theme'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
