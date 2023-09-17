import { Card, Flex, Heading, Text } from "@chakra-ui/react"
import useLamaStore from "../../store"
import CheckoutItem from "./CheckoutItem"

const CheckoutDetailsCard = () => {
  const { cart } = useLamaStore()

  return (
    <Card
      maxHeight={{ base: "40vh", md: "70vh" }}
      p="20px"
      overflowY="auto"
      bg="white"
      color="black"
    >
      <Flex gap={3} direction="column">
        {cart.items.length > 0 ? (
          cart.items.map((item) => <CheckoutItem item={item} />)
        ) : (
          <Heading alignSelf="center" fontWeight="normal" opacity={0.8} m={5}>
            There are no items in your cart.
          </Heading>
        )}
        {cart.total !== 0 && (
          <Text alignSelf="end" fontSize="xl">{`Total: $${cart.total}`}</Text>
        )}
      </Flex>
    </Card>
  )
}

export default CheckoutDetailsCard
