import { Tooltip as ChakraTooltip } from '@chakra-ui/react'

const Tooltip = ({
  label,
  children,
  fontSize = '1.8rem'
}: {
  label: string
  children: React.ReactNode
  fontSize?: string
}) => {
  return (
    <ChakraTooltip
      label={label}
      aria-label="Product Name Tooltip"
      hasArrow
      placement="top"
      bg="#80BC03"
      color="#fff"
      fontSize={fontSize}
      w="100%"
      textAlign="center"
      p="4px 8px"
      borderRadius="4px"
    >
      {children}
    </ChakraTooltip>
  )
}

export default Tooltip
