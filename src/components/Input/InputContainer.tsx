import { useFormContext } from 'react-hook-form'
import { IconType } from 'react-icons'
import InputPresentational from './InputPresentational'

interface InputContainerProps {
  name: string
  placeholder: string
  type?: string
  icon: IconType
  isDisabled?: boolean
}

const InputContainer = ({
  name,
  placeholder,
  type = 'text',
  icon,
  isDisabled = false
}: InputContainerProps) => {
  const { control } = useFormContext()

  return (
    <InputPresentational
      name={name}
      control={control}
      placeholder={placeholder}
      type={type}
      icon={icon}
      isDisabled={isDisabled}
    />
  )
}

export default InputContainer
