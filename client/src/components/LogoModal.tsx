import { ArrowDownIcon, ArrowUpIcon, CloseIcon } from "@chakra-ui/icons"
import {
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  Text,
  ModalOverlay,
  VStack,
  Center,
  Image,
} from "@chakra-ui/react"
import { useState } from "react"
import Ana from "../assets/Ana.jpg"
import AnaFunny from "../assets/hotlama.jpg"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const LogoModal = ({ isOpen, onClose }: Props) => {
  const [slide, setSlide] = useState(1)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="pink">
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
          <Center position="relative" paddingX={3}>
            {slide === 1 && (
              <VStack paddingBottom={12} gap={4}>
                <Text color="blue.400" fontSize="3xl">
                  To Ana
                </Text>
                <Image src={Ana} borderRadius={5} />
                <Text color="blue.400" fontSize="2xl">
                  {
                    "For believing in me : ) and being there for me. You're an incredible person."
                  }
                </Text>
                <IconButton
                  aria-label="Toggle photos"
                  icon={<ArrowDownIcon fontSize="22px" color="blue.400" />}
                  size="lg"
                  onClick={() => setSlide((prev) => prev + 1)}
                  position="absolute"
                  bottom={0}
                />
              </VStack>
            )}
            {slide === 2 && (
              <VStack paddingTop={12} paddingBottom={4}>
                <IconButton
                  aria-label="Toggle photos"
                  icon={<ArrowUpIcon fontSize="22px" color="blue.400" />}
                  size="lg"
                  onClick={() => setSlide((prev) => prev - 1)}
                  position="absolute"
                  top={-5}
                />
                <Image src={AnaFunny} borderRadius={5} />
              </VStack>
            )}
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LogoModal
