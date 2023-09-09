import { MinusIcon, AddIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Text } from "@chakra-ui/react"

interface Props {
  quantity: number
  addToCart: () => void
  subtractFromCart: () => void
}

const CartButtonGroup = ({ quantity, addToCart, subtractFromCart }: Props) => {
  return (
    <HStack border="1px solid gray">
      <IconButton
        aria-label="Update cart"
        icon={<MinusIcon />}
        size="xs"
        borderRadius={0}
        onClick={() => subtractFromCart()}
      />
      <Text>{quantity}</Text>
      <IconButton
        aria-label="Update cart"
        icon={<AddIcon />}
        size="xs"
        borderRadius={0}
        onClick={() => addToCart()}
      />
    </HStack>
  )
}

export default CartButtonGroup
