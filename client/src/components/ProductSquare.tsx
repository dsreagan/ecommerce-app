import { Card, Text, CardFooter, VStack, Image } from "@chakra-ui/react"
import Product from "../entities/Product"

interface Props {
  product: Product
}

const ProductSquare = ({ product }: Props) => {
  return (
    <Card w="200px" justify="center" bg="transparent">
      <VStack>
        <Image w="100%" src={product.image} />
        <Text>{product.title}</Text>
      </VStack>

      <CardFooter></CardFooter>
    </Card>
  )
}

export default ProductSquare
