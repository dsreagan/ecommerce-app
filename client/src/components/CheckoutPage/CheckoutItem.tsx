import { Center, Divider, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"
import CartItem from "../../entities/CartItem"

interface Props {
  item: CartItem
}

const CheckoutItem = ({ item }: Props) => {
  return (
    <>
      <Flex justify="space-between">
        <HStack gap={5}>
          <Center w="60px" h="60px" overflow="hidden" borderRadius={5}>
            <Image src={item.image} borderRadius={5} />
          </Center>
          <VStack align="start">
            <Heading size="md">{item.title}</Heading>
            <Text>{item.color}</Text>
            <Text>{item.size}</Text>
          </VStack>
        </HStack>
        <VStack>
          <Text opacity={0.8}>${item.price}</Text>
          <Text opacity={0.8}>{`x ${item.quantity}`}</Text>
          <Divider />
          <Text fontWeight="bold" fontSize="lg">${item.quantity * item.price}</Text>
        </VStack>
      </Flex>
      <Divider />
    </>
  )
}

export default CheckoutItem
