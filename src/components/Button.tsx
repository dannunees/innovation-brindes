import React from 'react'
import { Button as ChakraButton, Spinner } from '@chakra-ui/react'

interface ButtonProps {
  title: string
  onClick: () => void
  isLoading: boolean
  width?: string
  bgColor?: string
  isMarginAuto?: boolean
  color?: string
}

const Button = ({
  title,
  onClick,
  isLoading,
  width = '50%',
  bgColor = '#fff',
  isMarginAuto = true,
  color = '#535353'
}: ButtonProps) => {
  return (
    <ChakraButton
      margin={isMarginAuto ? '0 auto' : '0'}
      bg={isLoading ? 'gray.200' : bgColor}
      borderRadius="50px"
      color={color}
      width={width}
      height="55px"
      fontSize="1.6rem"
      fontWeight="semibold"
      onClick={onClick}
      isDisabled={isLoading}
      _hover={{
        bg: 'white',
        color: '#4CB500',
        border: '1px solid #4CB500'
      }}
    >
      {isLoading ? <Spinner /> : title}
    </ChakraButton>
  )
}

export default Button
