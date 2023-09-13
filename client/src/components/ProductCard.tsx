import { AddIcon, CheckIcon } from "@chakra-ui/icons"
import {
  Button,
  Card,
  Center,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Product from "../entities/Product"
import useLamaStore from "../store"

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { user, cart, onAddFirstToCart, onAddAnotherToCart } = useLamaStore()
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
      <Center maxHeight="200px" overflow="hidden" borderRadius={3}>
        <Image w="100%" src={product.image} />
      </Center>
      <Heading marginBottom={5} fontSize="xl">
        <Link to={"/products/" + product._id}>{product.title}</Link>
      </Heading>
      <HStack justify="space-between" w="100%" paddingX="5px">
        <Text fontSize="lg">
          {user?.username
            ? `$${product.price - product.price * 0.2}`
            : "$" + product.price}
        </Text>
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
      </HStack>
    </Card>
  )
}

export default ProductCard
