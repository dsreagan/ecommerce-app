import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Text } from "@chakra-ui/react"

interface Props {
  quantity: number
  addAnotherToCart: () => void
  subtractFromCart: () => void
}

const CartButtonGroup = ({ quantity, addAnotherToCart, subtractFromCart }: Props) => {
  return (
    <HStack border="1px solid black" borderRadius={5}>
      {quantity === 1 ? (
        <IconButton
          aria-label="Update cart"
          icon={<DeleteIcon />}
          variant="primary"
          size="xs"
          borderRadius={5}
          onClick={() => subtractFromCart()}
        />
      ) : (
        <IconButton
          aria-label="Update cart"
          icon={<MinusIcon />}
          variant="primary"
          size="xs"
          borderRadius={5}
          onClick={() => subtractFromCart()}
        />
      )}
      <Text color="black">{quantity}</Text>
      <IconButton
        aria-label="Update cart"
        icon={<AddIcon />}
        variant="primary"
        size="xs"
        borderRadius={5}
        onClick={() => addAnotherToCart()}
      />
    </HStack>
  )
}

export default CartButtonGroup
