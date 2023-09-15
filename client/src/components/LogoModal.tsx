import { CloseIcon } from "@chakra-ui/icons"
import {
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  ModalOverlay,
} from "@chakra-ui/react"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const LogoModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex p={1} justify="end">
          <IconButton
            aria-label="Close modal"
            icon={<CloseIcon />}
            size="xs"
            w="10px"
            onClick={onClose}
          />
        </Flex>
        <ModalBody>
          <Text>Welcome to Hot Lama</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LogoModal
