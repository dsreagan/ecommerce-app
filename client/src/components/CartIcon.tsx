import useLamaStore from "../store"
import { Box, IconButton, Text } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"

interface Props {
  onClick: () => void
}

const CartIcon = ({ onClick }: Props) => {
  const cart = useLamaStore((s) => s.cart)
  const [numItems, setNumItems] = useState(0)

  useEffect(() => {
    let count = 0
    cart.items.forEach((i) => (count += i.quantity))
    setNumItems(count)
  }, [cart])

  return (
    <Box overflow="visible" position="relative">
      <IconButton
        position="absolute"
        top={-5}
        right={{ base: "6", sm: "14" }}
        aria-label="Go to cart"
        icon={<ShoppingCartOutlined />}
        variant="ghost"
        size="md"
        zIndex="10"
        onClick={onClick}
      />
      <Text
        position="absolute"
        top={-6}
        right={{ base: "6", sm: "14" }}
        fontSize="2xs"
        zIndex="0"
      >
        ({numItems})
      </Text>
    </Box>
  )
}

export default CartIcon
