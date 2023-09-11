import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Product from "../entities/Product"
import getProducts from "../utils/getProducts"
import ProductSquare from "./ProductSquare"

const ProductGrid = () => {
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    getProducts().then((res) => {
      console.log(res)
      setProducts(res)
    })
  }, [])

  return (
    <Flex w="100%" wrap="wrap" gap={12} justify="center">
      {products.length > 0 &&
        products.map((product) => (
          <ProductSquare key={product._id} product={product} />
        ))}
    </Flex>
  )
}

export default ProductGrid
