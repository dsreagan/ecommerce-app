import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useState } from "react"
import Product from "../../entities/Product"
import useLamaStore from "../../store"

interface Props {
  product: Product
  setAddedToCart: React.Dispatch<React.SetStateAction<boolean>>
}

const AddMultipleButtonGroup = ({ product, setAddedToCart }: Props) => {
  const { cart, onAddFirstToCart, onAddAnotherToCart } = useLamaStore()
  const [quantity, setQuantity] = useState(1)

  // Really messy !!!
  const onAddToCart = () => {
    const itemAdded = {
      id: product._id,
      title: product.title,
      description: product.description,
      image: product.image,
      categories: product.categories,
      size: product.size,
      color: product.color,
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
    setQuantity(1)
    setAddedToCart(true)
  }

  return (
    <VStack gap={4} position="relative">
      <HStack border="1px solid black" borderRadius={5}>
        <IconButton
          aria-label="Update cart"
          icon={<MinusIcon />}
          variant="primary"
          size={{ base: "xs", md: "sm" }}
          onClick={() => setQuantity((prev) => prev - 1)}
          isDisabled={quantity <= 1}
        />
        <Box p={{ md: 1 }}>
          <Text fontSize={{ md: "xl" }} fontWeight="bold" color="black">
            {quantity}
          </Text>
        </Box>
        <IconButton
          aria-label="Update cart"
          icon={<AddIcon />}
          variant="primary"
          size={{ base: "xs", md: "sm" }}
          onClick={() => setQuantity((prev) => prev + 1)}
        />
      </HStack>
      <Button onClick={onAddToCart} variant="secondary" size={{base: "sm", md: "md"}}>
        <HStack>
          <Text fontSize={{ md: "lg" }}>Add To Cart</Text>
          <ShoppingCartOutlined />
        </HStack>
      </Button>
    </VStack>
  )
}

export default AddMultipleButtonGroup
