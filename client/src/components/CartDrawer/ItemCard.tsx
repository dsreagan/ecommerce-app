import { CloseIcon } from "@chakra-ui/icons"
import {
  Button,
  Card,
  Center,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import CartItem from "../../entities/CartItem"
import useLamaStore from "../../store"
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
    <Card w="100%" pos="relative" paddingTop={5} paddingBottom={3} paddingX={1}>
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
      <HStack w="100%">
        //
        <Image src={item.image} borderRadius={5} w="45px" />
        // title and price+btns
        <VStack gap={5} paddingLeft={2} w="100%" align="start">
          <Button p={0} onClick={onClose} variant="link">
            <Text fontSize="lg">
              <Link to={"/products/" + item.id}>{item.title}</Link>
            </Text>
          </Button>
          //price and btns
          <HStack justify="space-between" w="100%">
            <Text fontSize="md" opacity={0.8} fontWeight="bold">
              ${item.price}
            </Text>
            <CartButtonGroup
              quantity={item.quantity}
              addAnotherToCart={() => onAddAnotherToCart(item)}
              subtractFromCart={() => subtractFromCart(item)}
            />
          </HStack>
        </VStack>
      </HStack>
    </Card>
  )
}

export default CartItemCard
