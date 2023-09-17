import { WarningIcon } from "@chakra-ui/icons"
import { Button, HStack, Text } from "@chakra-ui/react"

const WarningBanner = () => {
  return (
    <HStack paddingX={3} bg="red.500">
      <WarningIcon color="whitesmoke" />
      <Text color="whitesmoke" fontSize={{ base: "xs", md: "md" }}>
        Hot lama is not a real shop. It is a project made by{" "}
        <Button
          variant="link"
          as="a"
          href="https://dsreagan.com"
          target="_blank"
          fontSize={{ base: "xs", md: "md" }}
          color="whitesmoke"
        >
          Daniel Reagan
        </Button>
        . No payment information will be saved.
      </Text>
    </HStack>
  )
}

export default WarningBanner
