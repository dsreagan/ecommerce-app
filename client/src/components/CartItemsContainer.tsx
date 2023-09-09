import useLamaStore from "../store"
import { VStack, Text } from "@chakra-ui/react"
import CartItemDisplay from "./CartItemDisplay"

const CartItemsContainer = () => {
  const cart = useLamaStore((s) => s.cart)

  return (
    <VStack>
      {cart.items.length > 0 ? (
        cart.items.map((item) => (
          <CartItemDisplay key={item.id} item={item} />
        ))
      ) : (
        <Text>There are no items in your cart.</Text>
      )}
    </VStack>
  )
}

export default CartItemsContainer
