import { Card, Flex, Heading } from "@chakra-ui/react"
import useLamaStore from "../store"
import CheckoutItem from "./CheckoutItem"

const CheckoutDetails = () => {
  const { cart, onAddAnotherToCart, subtractFromCart, removeFromCart } =
    useLamaStore()

  return (
    <Card h="70vh" p="20px">
      <Flex gap={3} direction="column">
        {cart.items.length > 0 ? (
          cart.items.map((item) => <CheckoutItem item={item} />)
        ) : (
          <Heading>There are no items in your cart.</Heading>
        )}
      </Flex>
    </Card>
  )
}

export default CheckoutDetails
