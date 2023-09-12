import { Flex, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Product from "../entities/Product"
import getProducts from "../utils/getProducts"
import CategorySelector from "./CategorySelector"
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
    <>
      Put this in HomePage
      <Flex w="100%" padding="10px" bg="blue.300">
        <CategorySelector category={category} setCategory={setCategory} />{" "}
      </Flex>
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
    </>
  )
}

export default ProductGrid
