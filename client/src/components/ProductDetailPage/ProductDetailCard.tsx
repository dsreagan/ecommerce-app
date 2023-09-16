import { Card, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import Product from "../../entities/Product"
import AddToCartSection from "./AddToCartSection"
import ProductImage from "./ProductImage"

interface Props {
  product: Product
}

const ProductDetailCard = ({ product }: Props) => {
  return (
    <Card bg="white" borderRadius={5}>
      <Grid
        height={{ base: "300px", md: "450px" }}
        width={{ md: "900px" }}
        gridTemplateAreas={`"i t" "i d" "i b"`}
        gridTemplateColumns="0.8fr 1.2fr"
        gridTemplateRows="0.8fr 1.2fr 1fr"
      >
        <GridItem area="i" alignItems="start">
          <ProductImage image={product.image} />
        </GridItem>
        <GridItem area="t" paddingX={5} paddingY={1}>
          <Heading
            fontSize={{ base: "xl", md: "3xl" }}
            fontWeight="normal"
            color="black"
          >
            {product.title}
          </Heading>
        </GridItem>
        <GridItem area="d" paddingX={5}>
          <Text fontSize="lg" color="black">
            {product.description}
          </Text>
        </GridItem>
        <GridItem area="b">
          <AddToCartSection product={product} />
        </GridItem>
      </Grid>
    </Card>
  )
}

export default ProductDetailCard
