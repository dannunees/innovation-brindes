import React from 'react'
import {
  Input as ChakraInput,
  InputLeftElement,
  InputGroup
} from '@chakra-ui/react'
import { Controller, Control, FieldValues } from 'react-hook-form'
import { IconType } from 'react-icons'

interface InputPresentationalProps {
  name: string
  control: Control<FieldValues>
  placeholder: string
  type: string
  icon: IconType
  isDisabled?: boolean
}

const InputPresentational = ({
  name,
  control,
  placeholder,
  type,
  icon: Icon,
  isDisabled
}: InputPresentationalProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <InputGroup height="55px" width="380px">
          <InputLeftElement pointerEvents="none" height="55px" ml="4rem">
            <Icon color="#535353" size="1.5rem" />
          </InputLeftElement>
          <ChakraInput
            {...field}
            placeholder={placeholder}
            borderRadius="50px"
            bg="#fff"
            color="#535353"
            border="1px solid #ddd"
            _placeholder={{ color: '#535353' }}
            width="100%"
            height="55px"
            fontSize="1.5rem"
            fontWeight="regular"
            pl="7.5rem"
            textAlign="left"
            type={type}
            autoComplete="off"
            isDisabled={isDisabled}
          />
        </InputGroup>
      )}
    />
  )
}

export default InputPresentational
