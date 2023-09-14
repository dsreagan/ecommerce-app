import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton } from "@chakra-ui/react"

const HeroSlider = () => {
  return (
    <Box w="100%" pos="relative" marginBottom={50}>
      <Flex
        w="100%"
        zIndex={1}
        justify="space-between"
        pos="absolute"
        top="50%"
      >
        <IconButton
          borderRadius="100%"
          aria-label="Navigate slider"
          icon={<ChevronLeftIcon />}
        />
        <IconButton
          borderRadius="100%"
          aria-label="Navigate slider"
          icon={<ChevronRightIcon />}
        />
      </Flex>
      <Box h="400px" w="100%" bg="gray.400"></Box>
      {/* map through the images here, give their container a z index of 0 */}
    </Box>
  )
}

export default HeroSlider
