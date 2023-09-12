import { ChevronLeftIcon } from "@chakra-ui/icons"
import {
  Grid,
  GridItem,
  Center,
  Heading,
  Image,
  Text,
  IconButton,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Product from "../entities/Product"
import getSingleProduct from "../utils/getSingleProduct"

const ProductDetailPage = () => {
  const { id: productId } = useParams()
  const [product, setProduct] = useState({} as Product)

  useEffect(() => {
    getSingleProduct(productId).then((result) => setProduct(result))
  }, [productId])

  return (
    <Center paddingY="70px" pos="relative">
      <Link to="/">
        <IconButton
          aria-label="Go back"
          icon={<ChevronLeftIcon />}
          fontSize="24px"
          variant="outline"
          pos="absolute"
          top={5}
          left={5}
        />
      </Link>
      <Grid
        gridTemplateAreas={`"i t" "i b" "i d"`}
        gridTemplateColumns={"0.8fr 1.2fr"}
        h="350px"
        w="900px"
      >
        <GridItem area="i" bg="coral">
          <Center h="450px" overflow="hidden">
            <Image src={product.image} />
          </Center>
        </GridItem>
        <GridItem area="t" bg="blue.200" paddingX={5}>
          <Heading fontSize="3xl">{product.title}</Heading>
        </GridItem>
        <GridItem area="b" bg="green.200">
          buttons
        </GridItem>
        <GridItem area="d" bg="red.300" paddingX={5}>
          <Text>{product.description}</Text>
        </GridItem>
      </Grid>
    </Center>
  )
}

export default ProductDetailPage
