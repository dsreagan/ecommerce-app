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
        maxHeight={{ base: "350px", md: "450px" }}
        minHeight="300px"
        width={{ lg: "900px" }}
        gridTemplateAreas={`"i t" "i b" "d d"`}
        gridTemplateColumns="0.8fr 1.2fr"
        gridTemplateRows="0.8fr 1fr 1.2fr"
      >
        <GridItem area="i" alignItems="start">
          <ProductImage image={product.image} />
        </GridItem>
        <GridItem area="t" paddingX={5} paddingY={1}>
          <Heading fontSize={{ base: "xl", md: "3xl" }} color="black">
            {product.title}
          </Heading>
        </GridItem>
        <GridItem area="b">
          <AddToCartSection product={product} />
        </GridItem>
        <GridItem
          area="d"
          paddingY={{base: "2", md: "4"}}
          paddingX={2}
          overflowY="auto"
        >
          <Text color="black" opacity={0.9} fontSize={{base: "sm", md: "md"}}>
            {product.description}
          </Text>
        </GridItem>
      </Grid>
    </Card>
  )
}

export default ProductDetailCard
