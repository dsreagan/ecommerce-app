import { Box, IconButton, Text } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@mui/icons-material"

const CartIcon = () => {
  return (
    <Box overflow="visible" position="relative">
      <IconButton
        position="absolute"
        top={-5}
        right={{base: "6", sm: "14"}}
        aria-label="Go to cart"
        icon={<ShoppingCartOutlined />}
        variant="ghost"
        size="md"
        zIndex="10"
      />
      <Text position="absolute" top={-6} right={{base: "6", sm: "14"}} fontSize="2xs" zIndex="0">
        (1)
      </Text>
    </Box>
  )
}

export default CartIcon
