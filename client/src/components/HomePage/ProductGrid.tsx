import { SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Product from "../../entities/Product"
import getProducts from "../../utils/getProducts"
import ProductCard from "./ProductCard"
import ProductCardContainer from "./ProductCardContainer"

interface Props {
  category: string
}

const ProductGrid = ({ category }: Props) => {
  const [products, setProducts] = useState([] as Product[])

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
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {products.length > 0 &&
          products.map((product) => (
            <ProductCardContainer key={product._id}>
              <ProductCard product={product} />
            </ProductCardContainer>
          ))}
      </SimpleGrid>
    </>
  )
}

export default ProductGrid
