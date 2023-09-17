import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import SlideOne from "./SlideOne"
import SlideTwo from "./SlideTwo"

const HeroSlider = () => {
  const [slideNumber, setSlideNumber] = useState(1)

  return (
    <Box w="100%" pos="relative" marginBottom={30}>
      <Flex
        w="100%"
        zIndex={5}
        justify="space-between"
        pos="absolute"
        top="50%"
        paddingX={2}
      >
        <IconButton
          borderRadius="100%"
          aria-label="Navigate slider"
          icon={<ChevronLeftIcon />}
          fontSize="30px"
          size="lg"
          onClick={() => setSlideNumber((prev) => prev - 1)}
          isDisabled={slideNumber === 1}
        />
        <IconButton
          borderRadius="100%"
          aria-label="Navigate slider"
          icon={<ChevronRightIcon />}
          fontSize="30px"
          size="lg"
          onClick={() => setSlideNumber((prev) => prev + 1)}
          isDisabled={slideNumber === 2}
        />
      </Flex>
      <Box h="400px" w="100%" bg="gray.400" overflow="hidden">
        {slideNumber === 1 && <SlideOne />}
        {slideNumber === 2 && <SlideTwo />}
      </Box>
    </Box>
  )
}

export default HeroSlider
