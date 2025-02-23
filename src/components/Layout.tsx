import { Flex } from '@chakra-ui/react'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/assets/images/background.jpg')"
      bgSize="cover"
      bgPosition="center"
      letterSpacing="-0.8px"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
