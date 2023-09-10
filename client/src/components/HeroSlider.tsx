import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton } from "@chakra-ui/react"

const HeroSlider = () => {
  return (
    <Box w="100%">
      <Flex w="100%" zIndex={10} justify="space-between">
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
      {/* map through the images here, give their container a z index of 0 */}
    </Box>
  )
}

export default HeroSlider
