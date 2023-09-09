import { Box, Button, Text } from "@chakra-ui/react"

const WarningBanner = () => {
  return (
    <Box paddingX={3} bg="red.500">
      <Text fontSize="sm">
        Hot lama is not a real shop. It is a project made by{" "}
        <Button
          variant="link"
          fontSize="sm"
          as="a"
          href="https://dsreagan.com"
          target="_blank"
        >
          Daniel Reagan
        </Button>
        . No payment information will be saved.
      </Text>
    </Box>
  )
}

export default WarningBanner
