import React from 'react'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)

const Heading = ({ title }: { title: string }) => {
  return (
    <MotionText
      fontSize="4rem"
      fontWeight="bold"
      color="#49B500"
      mb={12}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </MotionText>
  )
}

export default Heading
