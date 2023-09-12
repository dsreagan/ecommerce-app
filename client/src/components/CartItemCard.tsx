import { CloseIcon } from "@chakra-ui/icons"
import {
  Button,
  Card,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import CartItem from "../entities/CartItem"
import useLamaStore from "../store"
import CartButtonGroup from "./CartButtonGroup"

interface Props {
  item: CartItem
  onClose: () => void
}

const CartItemCard = ({ item, onClose }: Props) => {
  const { onAddAnotherToCart, subtractFromCart, removeFromCart } =
    useLamaStore()

  useEffect(() => {
    if (item.quantity < 1) removeFromCart(item)
  })

  return (
    <Card w="100%" pos="relative" paddingY={2}>
      <IconButton
        icon={<CloseIcon fontSize="8px" />}
        aria-label="Remove from cart"
        pos="absolute"
        right={0}
        top={0}
        size="xs"
        variant="ghost"
        onClick={() => removeFromCart(item)}
        _hover={{ color: "red.400" }}
      />
      <VStack w="100%" paddingX={5} paddingY={3} align="start">
        <HStack w="100%" justify="space-between">
          <Button p={0} onClick={onClose} variant="link">
            <Text>
              <Link to={"/products/" + item.id}>{item.title}</Link>
            </Text>
          </Button>
          <Text>${item.price}</Text>
        </HStack>
        <CartButtonGroup
          quantity={item.quantity}
          addAnotherToCart={() => onAddAnotherToCart(item)}
          subtractFromCart={() => subtractFromCart(item)}
        />
      </VStack>
    </Card>
  )
}

export default CartItemCard
