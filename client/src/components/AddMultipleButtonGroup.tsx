import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useState } from "react"
import Product from "../entities/Product"
import useLamaStore from "../store"

interface Props {
    product: Product
}

const AddMultipleButtonGroup = ({product}:Props) => {
  const { cart, onAddFirstToCart, onAddAnotherToCart } = useLamaStore()
  const [quantity, setQuantity] = useState(1)

  // Really messy !!!
  const onAddToCart = () => {
    const itemAdded = {
      title: product.title,
      id: product._id,
      price: product.price,
      quantity: 1,
    }
    let inCart = false
    cart.items.forEach((item) => {
      if (item.id === itemAdded.id) inCart = true
    })
    if (inCart === false) {
      onAddFirstToCart(itemAdded)
      for (let i = 0; i < quantity - 1; i++) {
        onAddAnotherToCart(itemAdded)
      }
    } else {
      for (let i = 0; i < quantity; i++) {
        onAddAnotherToCart(itemAdded)
      }
    }
  }

  return (
    <VStack gap={4}>
      <HStack border="1px solid gray">
        <IconButton
          aria-label="Update cart"
          icon={<MinusIcon />}
          borderRadius={0}
          onClick={() => setQuantity((prev) => prev - 1)}
          isDisabled={quantity <= 1}
        />
        <Box p={2}>
          <Text fontSize="xl" fontWeight="bold">
            {quantity}
          </Text>
        </Box>
        <IconButton
          aria-label="Update cart"
          icon={<AddIcon />}
          borderRadius={0}
          onClick={() => setQuantity((prev) => prev + 1)}
        />
      </HStack>
      <Button size="lg" onClick={onAddToCart}>
        <HStack>
          <Text fontSize="xl">Add To Cart</Text>
          <ShoppingCartOutlined />
        </HStack>
      </Button>
    </VStack>
  )
}

export default AddMultipleButtonGroup
