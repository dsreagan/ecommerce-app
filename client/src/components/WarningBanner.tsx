import { WarningTwoIcon } from "@chakra-ui/icons"
import { Button, HStack, Text } from "@chakra-ui/react"

const WarningBanner = () => {
  return (
    <HStack paddingX={3} bg="red.500">
      <WarningTwoIcon color="whitesmoke" />
      <Text color="whitesmoke" fontSize={{ base: "xs", md: "md" }}>
        This is a shopping experience project made by{" "}
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
        , it is not a real shop. No payment or personal information will be saved.
      </Text>
    </HStack>
  )
}

export default WarningBanner
