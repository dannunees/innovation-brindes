import { Flex, Text } from '@chakra-ui/react'
import { Button, Input } from 'components'
import { MdSearch } from 'react-icons/md'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import useToast from 'core/hooks/useToast'
import { useState } from 'react'
import { Filter } from '../interfaces/Filter'

type FilterAreaProps = {
  onFilter: (filters: Filter) => void
}

const FilterArea = ({ onFilter }: FilterAreaProps) => {
  const methods = useForm()
  const { handleSubmit } = methods
  const { showError } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)

  const onSubmit = async (data: FieldValues) => {
    const nome_produto = data.productName?.trim()
    const codigo_produto = data.productCode?.trim()

    if (!nome_produto && !codigo_produto) {
      showError('Por favor, preencha pelo menos um campo.')
      return
    }

    setIsLoading(true)
    try {
      onFilter({ nome_produto, codigo_produto })
      setActiveFilters(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearFilters = () => window.location.reload()

  return (
    <Flex
      flexDirection="column"
      gap={4}
      maxWidth="1440px"
      margin="0 auto"
      bg="#fff"
      w="100%"
      p={16}
      py={20}
    >
      <Text fontSize="2.4rem" fontWeight="bold">
        Filtrar por:
      </Text>

      <FormProvider {...methods}>
        <Flex gap={4}>
          <Input
            placeholder="Nome do produto"
            name="productName"
            icon={MdSearch}
            isDisabled={isLoading}
          />
          <Input
            placeholder="Código do produto"
            name="productCode"
            icon={MdSearch}
            isDisabled={isLoading}
            type="number"
          />
          <Button
            width="20%"
            title="Filtrar"
            bgColor="#9FC42F"
            isLoading={isLoading}
            isMarginAuto={false}
            onClick={handleSubmit(onSubmit)}
            color="#fff"
          />

          {activeFilters && (
            <Button
              width="10%"
              title="Limpar"
              bgColor="#9FC42F"
              isLoading={false}
              isMarginAuto={false}
              onClick={handleClearFilters}
              color="#fff"
            />
          )}
        </Flex>
      </FormProvider>
    </Flex>
  )
}

export default FilterArea
