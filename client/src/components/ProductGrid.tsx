import { SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Product from "../entities/Product"
import getProducts from "../utils/getProducts"
import ProductCard from "./ProductCard"
import ProductCardContainer from "./ProductCardContainer"

const ProductGrid = () => {
  const [products, setProducts] = useState([] as Product[])
  const [category, setCategory] = useState("")

  // This fetches from the api anytime a new filter option is made
  // Resulting in slow product loading time
  useEffect(() => {
    getProducts().then((res) => {
      category !== ""
        ? setProducts(
            res.filter((product: Product) =>
              product.categories?.includes(category)
            )
          )
        : setProducts(res)
    })
  }, [category])

  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
    >
      {products.length > 0 &&
        products.map((product) => (
          <ProductCardContainer>
            <ProductCard key={product._id} product={product} />
          </ProductCardContainer>
        ))}
    </SimpleGrid>
    // <VStack bg="coral" paddingX={14}>
    //   <Flex w="100%" paddingY={1} bg="blue.300">
    //     <CategorySelector category={category} setCategory={setCategory} />
    //   </Flex>
    //   <Wrap spacing={10} bg="red">
    //     {products.length > 0 &&
    //       products.map((product) => (
    //         <ProductCard key={product._id} product={product} />
    //       ))}
    //   </Wrap>
    // </VStack>
  )
}

export default ProductGrid
