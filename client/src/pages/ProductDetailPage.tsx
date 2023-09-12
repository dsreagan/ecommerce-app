import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AddMultipleButtonGroup from "../components/AddMultipleButtonGroup"
import BackButton from "../components/BackButton"
import Product from "../entities/Product"
import getSingleProduct from "../utils/getSingleProduct"

const ProductDetailPage = () => {
  const { id: productId } = useParams()
  const [product, setProduct] = useState({} as Product)

  useEffect(() => {
    getSingleProduct(productId).then((result) => setProduct(result))
  }, [productId])

  return (
    <Center pos="relative" bg="gray.400" h="100vh">
      <BackButton />
      <Grid
        gridTemplateAreas={{ base: `"i" "t" "d" "b"`, md: `"i t" "i b" "i d"` }}
        gridTemplateColumns="0.8fr 1.2fr"
        h="350px"
        w="900px"
      >
        <GridItem area="i" bg="coral">
          <Box h="450px" overflow="hidden">
            <Image src={product.image} />
          </Box>
        </GridItem>
        <GridItem area="t" bg="blue.200" paddingX={5}>
          <Heading fontSize="3xl">{product.title}</Heading>
        </GridItem>
        <GridItem area="b" bg="green.200">
          <Center h="100%">
            <AddMultipleButtonGroup product={product} />
          </Center>
        </GridItem>
        <GridItem area="d" bg="red.300" paddingX={5}>
          <Text>{product.description}</Text>
        </GridItem>
      </Grid>
    </Center>
  )
}

export default ProductDetailPage
