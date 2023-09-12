import { Box, Text } from "@chakra-ui/react"

const PromotionBanner = () => {
  return (
    <Box paddingX={3} bg="green.400">
      <Text fontSize="md">
        Sign in for a <Text fontSize="lg" fontWeight="bold" as="span">20% Discount!!!</Text>
      </Text>
    </Box>
  )
}

export default PromotionBanner
