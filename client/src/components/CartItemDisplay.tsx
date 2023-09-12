import { VStack, HStack, Text, Divider } from "@chakra-ui/react"
import CartButtonGroup from "./CartButtonGroup"
import useLamaStore from "../store"
import CartItem from "../entities/CartItem"
import { useEffect } from "react"

interface Props {
  item: CartItem
}

const CartItemDisplay = ({ item }: Props) => {
  const { onAddAnotherToCart, subtractFromCart, removeFromCart } =
    useLamaStore()

  useEffect(() => {
    if (item.quantity < 1) removeFromCart(item)
  })

  return (
    <>
      <VStack w="100%" paddingX={5} paddingY={3} align="start">
        <HStack w="100%" justify="space-between">
          <Text>{item.title}</Text>
          <Text>${item.price}</Text>
        </HStack>
        <CartButtonGroup
          quantity={item.quantity}
          addAnotherToCart={() => onAddAnotherToCart(item)}
          subtractFromCart={() => subtractFromCart(item)}
        />
      </VStack>
      <Divider />
    </>
  )
}

export default CartItemDisplay
