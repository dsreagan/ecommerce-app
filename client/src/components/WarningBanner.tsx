import { Box, Button, Text } from "@chakra-ui/react"

const WarningBanner = () => {
  return (
    <Box paddingX={3} bg="red.500">
      <Text>
        Hot lama is not a real shop. It is a project made by{" "}
        <Button
          variant="link"
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
