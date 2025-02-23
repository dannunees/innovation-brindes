import { Avatar } from '@chakra-ui/react'
import { Text, Flex } from '@chakra-ui/react'
import { UserProfile } from 'core/hooks/useProfile'
import { formatDateToBrazilian } from 'utils/formatDateToBrazilian'
import { formatUserName } from 'utils/formatUserName'
import { useCurrentTime } from 'core/hooks/useCurrentTime'

interface ProfileAreaProps {
  profile: UserProfile
  currentDate: Date
}

const ProfileArea = ({ profile, currentDate }: ProfileAreaProps) => {
  const { currentTime, formatTime } = useCurrentTime()

  return (
    <Flex alignItems="center" gap={6}>
      <Avatar
        src="/assets/images/avatar.webp"
        border="5px solid"
        borderColor="white"
        width="6.5rem"
        height="6.5rem"
      />
      <Flex direction="column">
        <Text fontSize="2rem" fontWeight="bold">
          {profile?.nome_usuario
            ? formatUserName(`${profile.nome_usuario} / ${profile.nome_grupo}`)
            : ''}
        </Text>
        <Text fontSize="1.4rem" textTransform="capitalize">
          {formatDateToBrazilian(currentDate)} - {formatTime(currentTime)}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ProfileArea
