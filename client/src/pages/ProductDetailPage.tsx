import {
  Center, Grid,
  GridItem,
  Heading, Show,
  Text
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AddToCartSection from "../components/ProductDetailPage/AddToCartSection"
import BackButton from "../components/ProductDetailPage/BackButton"
import ProductImage from "../components/ProductDetailPage/ProductImage"
import Product from "../entities/Product"
import getSingleProduct from "../utils/getSingleProduct"

const ProductDetailPage = () => {
  const { id: productId } = useParams()
  const [product, setProduct] = useState({} as Product)

  useEffect(() => {
    getSingleProduct(productId).then((result) => setProduct(result))
  }, [productId])

  return (
    <Center
      pos="relative"
      bg="gray.400"
      h="100vh"
      paddingX="5px"
      paddingTop={{ md: "100px" }}
    >
      <Show above="md">
        <BackButton />
      </Show>
      <Grid
        height={{ base: "300px", md: "450px" }}
        width={{ md: "900px" }}
        gridTemplateAreas={`"i t" "i b" "d d"`}
        gridTemplateColumns="0.8fr 1.2fr"
        gridTemplateRows="1fr 1.2fr 0.8fr"
      >
        <GridItem area="i" bg="coral">
          <ProductImage image={product.image} />
        </GridItem>
        <GridItem area="t" bg="blue.200" paddingX={5}>
          <Heading fontSize={{ base: "xl", md: "3xl" }} fontWeight="normal">
            {product.title}
          </Heading>
        </GridItem>
        <GridItem area="b" bg="green.200">
          <AddToCartSection product={product} />
        </GridItem>
        <GridItem area="d" bg="red.300" paddingX={5}>
          <Text>{product.description}</Text>
        </GridItem>
      </Grid>
    </Center>
  )
}

export default ProductDetailPage
