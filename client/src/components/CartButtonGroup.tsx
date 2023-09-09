import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Text } from "@chakra-ui/react"

interface Props {
  quantity: number
  addToCart: () => void
  subtractFromCart: () => void
}

const CartButtonGroup = ({ quantity, addToCart, subtractFromCart }: Props) => {
  return (
    <HStack border="1px solid gray">
      {quantity === 1 ? (
        <IconButton
          aria-label="Update cart"
          icon={<DeleteIcon />}
          size="xs"
          borderRadius={0}
          onClick={() => subtractFromCart()}
        />
      ) : (
        <IconButton
          aria-label="Update cart"
          icon={<MinusIcon />}
          size="xs"
          borderRadius={0}
          onClick={() => subtractFromCart()}
        />
      )}

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
