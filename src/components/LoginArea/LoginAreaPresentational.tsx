import React from 'react'
import {
  FormProvider,
  UseFormReturn,
  UseFormHandleSubmit,
  FieldValues
} from 'react-hook-form'
import { Flex, Checkbox, Text } from '@chakra-ui/react'
import { FaUser, FaUnlockAlt } from 'react-icons/fa'
import { Input, Button } from '../index'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

const LoginAreaPresentational = ({
  methods,
  handleSubmit,
  onSubmit,
  isLoading
}: {
  methods: UseFormReturn<FieldValues>
  handleSubmit: UseFormHandleSubmit<FieldValues>
  onSubmit: (data: FieldValues) => void
  isLoading: boolean
}) => {
  return (
    <FormProvider {...methods}>
      <MotionFlex
        direction="column"
        alignItems="center"
        justifyContent="center"
        bg="#4CB500"
        p={4}
        height="40rem"
        width="70rem"
        borderRadius="8px"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Flex
          direction="column"
          gap={6}
          maxW="100%"
          alignItems="flex-start"
          margin="0 auto"
          mt={16}
        >
          <Input
            name="username"
            placeholder="Usuário"
            icon={FaUser}
            isDisabled={isLoading}
          />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FaUnlockAlt}
            isDisabled={isLoading}
          />

          <Flex
            justifyContent="space-between"
            alignItems="center"
            width="95%"
            margin="0 auto"
            mt={2}
            mb={8}
            color="#F3FAEC"
            fontSize="1.2rem"
            letterSpacing="-0.1px"
          >
            <Checkbox>
              <Text fontSize="1.2rem">Manter Logado</Text>
            </Checkbox>
            <Text cursor="pointer">Esqueceu a senha?</Text>
          </Flex>

          <Button
            title="Login"
            onClick={handleSubmit(onSubmit)}
            isLoading={isLoading}
          />
        </Flex>
      </MotionFlex>
    </FormProvider>
  )
}

export default LoginAreaPresentational
