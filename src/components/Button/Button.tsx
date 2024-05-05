import { Button as ButtonChakra } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'outline'
  children: ReactNode
  height?: string
  width?: string
  size?: string
}

export const Button = ({
  children,
  variant,
  height,
  width,
  size,
}: ButtonProps) => {
  return (
    <ButtonChakra
      boxShadow="2px 8px 10px rgba(0, 0, 0, 0.3)"
      variant={variant}
      height={height}
      width={width}
      size={size}
    >
      {children}
    </ButtonChakra>
  )
}
