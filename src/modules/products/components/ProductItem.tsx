import { Product } from '../interfaces/Product'
import { Button, Flex, Image, Text, Box } from '@chakra-ui/react'
import { truncateText } from 'utils/truncateText'
import { formatPrice } from 'utils/formatPrice'
import { productColors } from 'mocks/productColors'
import { Tooltip } from 'components'

type ProductItemProps = {
  product: Product
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      gap={4}
      justifyContent="flex-start"
      letterSpacing="-0.8px"
      color="#000"
      alignItems="center"
      mb={12}
    >
      <Flex flexDirection="column" alignItems="center" gap={1}>
        <Tooltip label={product.nome}>
          <Text
            cursor="grabbing"
            fontSize="1.8rem"
            fontWeight="bold"
            textAlign="center"
          >
            {truncateText(product.nome, 20)}
          </Text>
        </Tooltip>
        <Text fontSize="1.4rem">{product.codigo}</Text>
      </Flex>

      <Flex flexDirection="column" border="1px solid #E4E4E4">
        <Flex
          w="250px"
          h="300px"
          p={1}
          backgroundImage={`url(${product.imagem})`}
          backgroundSize="cover"
          backgroundPosition="center"
          position="relative"
          overflow="hidden"
        >
          <Text
            position="absolute"
            top="0px"
            right="0px"
            bg="#F9F9F9"
            color="#39B8CE"
            fontSize="1.4rem"
            fontWeight="bold"
            px="6px"
            py="2px"
            borderRadius="4px"
          >
            EXCLUSIVO
          </Text>

          <Flex
            gap={4}
            position="absolute"
            bottom="0px"
            left="0px"
            bg="#fff"
            color="#8F8F8F"
            fontSize="1.2rem"
            fontWeight="semibold"
            px="6"
            py="2"
            borderRadius="0 8px 0 0"
            border="1px solid #E4E4E4"
            alignItems="center"
          >
            <Image
              position="absolute"
              top="0px"
              left="5px"
              src="/assets/images/open-box.png"
              alt="open-box"
              h="40px"
              mt="-10px"
            />
            <Text pl="35px">
              com embalagem <br /> especial
            </Text>
          </Flex>
        </Flex>

        <Flex px="10px" mt={4}>
          <Tooltip label={product.descricao} fontSize="1.4rem">
            <Text fontSize="1.4rem" color="#7C7A7B" h="40px">
              {truncateText(product.descricao, 55)}
            </Text>
          </Tooltip>
        </Flex>

        <Flex px="10px" flexDirection="column" gap={2} mt={4}>
          <Text fontSize="1.4rem" color="#7C7A7B" fontWeight="bold">
            Cores:
          </Text>
          <Flex gap={2} flexWrap="wrap">
            {productColors.slice(0, 6).map((color, index) => (
              <Box
                key={index}
                w="20px"
                h="20px"
                bg={color}
                borderRadius="50%"
              />
            ))}
          </Flex>
          <Flex gap={2} flexWrap="wrap">
            {productColors.slice(6, 10).map((color, index) => (
              <Box
                key={index}
                w="20px"
                h="20px"
                bg={color}
                borderRadius="50%"
              />
            ))}
          </Flex>
          <Flex gap={2} flexWrap="wrap">
            {productColors.slice(10, 14).map((color, index) => (
              <Box
                key={index}
                w="20px"
                h="20px"
                bg={color}
                borderRadius="50%"
              />
            ))}
          </Flex>
        </Flex>

        <Flex
          px="10px"
          pb="12px"
          alignItems="flex-end"
          fontSize="1.2rem"
          flexDirection="column"
          color="#7C7A7B"
          lineHeight="20px"
        >
          <Text>a partir de</Text>
          <Text fontSize="2rem" color="#434343" fontWeight="bold">
            {formatPrice(Number(product.preco))}
          </Text>
          <Text>gerado pela melhor oferta</Text>
        </Flex>
      </Flex>

      <Button
        minW="250px"
        bg="#80BC03"
        color="white"
        fontWeight="bold"
        fontSize="1.4rem"
      >
        CONFIRA
      </Button>
    </Flex>
  )
}

export default ProductItem
