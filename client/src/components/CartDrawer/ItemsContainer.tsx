import useLamaStore from "../../store"
import { VStack, Text } from "@chakra-ui/react"
import CartItemCard from "./ItemCard"

interface Props {
  onClose: () => void
}

const CartItemsContainer = ({ onClose }: Props) => {
  const cart = useLamaStore((s) => s.cart)

  return (
    <VStack>
      {cart.items.length > 0 ? (
        cart.items.map((item) => (
          <CartItemCard key={item.id} item={item} onClose={onClose} />
        ))
      ) : (
        <Text fontSize="lg" marginY={3}>There are no items in your cart.</Text>
      )}
    </VStack>
  )
}

export default CartItemsContainer
