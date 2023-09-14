import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Text } from "@chakra-ui/react"

interface Props {
  quantity: number
  addAnotherToCart: () => void
  subtractFromCart: () => void
}

const CartButtonGroup = ({ quantity, addAnotherToCart, subtractFromCart }: Props) => {
  return (
    <HStack border="1px solid gray" borderRadius={5}>
      {quantity === 1 ? (
        <IconButton
          aria-label="Update cart"
          icon={<DeleteIcon />}
          size="xs"
          borderRadius={5}
          onClick={() => subtractFromCart()}
        />
      ) : (
        <IconButton
          aria-label="Update cart"
          icon={<MinusIcon />}
          size="xs"
          borderRadius={5}
          onClick={() => subtractFromCart()}
        />
      )}

      <Text>{quantity}</Text>
      <IconButton
        aria-label="Update cart"
        icon={<AddIcon />}
        size="xs"
        borderRadius={5}
        onClick={() => addAnotherToCart()}
      />
    </HStack>
  )
}

export default CartButtonGroup
