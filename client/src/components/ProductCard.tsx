import { AddIcon, CheckIcon } from "@chakra-ui/icons"
import { Button, Card, Center, Heading, Image } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"
import Product from "../entities/Product"
import useLamaStore from "../store"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { cart, onAddFirstToCart, onAddAnotherToCart } = useLamaStore()
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    setTimeout(() => setAddedToCart(false), 180)
  })

  const handleClick = () => {
    setAddedToCart(true)
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
    inCart === false
      ? onAddFirstToCart(itemAdded)
      : onAddAnotherToCart(itemAdded) // This comes out to O(n^2) !!! Less than ideal
  }

  return (
    <Card bg="transparent" align="center" gap={3} paddingBottom={3}>
      <Center maxHeight="200px" overflow="hidden">
        <Image w="100%" src={product.image} />
      </Center>
      <Heading marginBottom={5} fontSize="xl">
        {product.title}
      </Heading>
      <Button onClick={handleClick} w="70px">
        {addedToCart ? (
          <CheckIcon color="green.400" />
        ) : (
          <>
            <AddIcon />
            <ShoppingCartOutlined />
          </>
        )}
      </Button>
    </Card>
  )
}

export default ProductCard
