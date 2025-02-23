import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="white"
      direction="column"
    >
      <Image
        src="/assets/images/loading.svg"
        alt="Loading"
        width={400}
        height={400}
      />
      <Text
        fontSize="2rem"
        fontWeight="semibold"
        letterSpacing="-0.8px"
        color="#000"
        mt={4}
        textAlign="center"
      >
        Ajustando os motores... <br /> Quase prontos para a decolagem! 🚀
      </Text>
    </Flex>
  )
}

export default Loading
