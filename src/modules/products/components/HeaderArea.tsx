import { Flex, Image, Box } from '@chakra-ui/react'
import { MdMarkEmailUnread, MdPhone } from 'react-icons/md'
import { useProfile } from 'core/hooks/useProfile'
import { RiLogoutBoxRFill } from 'react-icons/ri'
import { useAuth } from 'core/contexts/AuthContext'
import { ProfileArea } from 'components'

const HeaderArea = () => {
  const currentDate = new Date()
  const profile = useProfile()
  const { logout } = useAuth()

  return (
    <Box width="100%" bg="#9FC42F" color="white">
      <Flex
        height="90px"
        maxWidth="1440px"
        margin="0 auto"
        alignItems="center"
        justifyContent="space-between"
        px={12}
      >
        <Image src="/assets/images/logo.png" alt="Logo" height="90px" />

        <Flex gap={4} alignItems="center">
          <RiLogoutBoxRFill
            size={34}
            cursor="pointer"
            onClick={() => logout()}
          />

          <MdMarkEmailUnread size={34} cursor="pointer" />
          <MdPhone size={34} cursor="pointer" />

          {profile && (
            <ProfileArea profile={profile} currentDate={currentDate} />
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default HeaderArea
