import { useState, useEffect } from 'react'
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  IconButton,
  Image
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import ReactPlayer from 'react-player'

const FloatingVideoButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [position, setPosition] = useState({ x: 20, y: 0 })

  const updatePosition = () => {
    if (typeof window !== 'undefined') {
      setPosition({ x: window.innerWidth - 180, y: window.innerHeight - 180 })
    }
  }

  useEffect(() => {
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <Box
        position="fixed"
        style={{ left: position.x, top: position.y }}
        zIndex={1000}
        cursor="pointer"
      >
        <Box position="relative" display="inline-block">
          <IconButton
            icon={<MdClose />}
            size="xs"
            position="absolute"
            top="-5px"
            right="-5px"
            onClick={() => setIsVisible(false)}
            aria-label="Close floating button"
          />
          <Image
            src="/assets/images/me.gif"
            alt="Preview GIF"
            style={{ width: '120px', height: '120px', borderRadius: '50%' }}
            onClick={() => setIsOpen(true)}
          />
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none" maxW="800px" mx="auto">
          <ModalCloseButton color="white" />
          <ReactPlayer
            url="/assets/images/preview.mp4"
            playing
            loop
            controls
            width="800px"
            height="500px"
            style={{ borderRadius: '8px', margin: '0 auto' }}
          />
        </ModalContent>
      </Modal>
    </>
  )
}

export default FloatingVideoButton
