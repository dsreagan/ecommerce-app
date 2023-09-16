import {
  Center, Show
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../components/ProductDetailPage/BackButton"
import ProductDetailCard from "../components/ProductDetailPage/ProductDetailCard"
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
      h="100vh"
      paddingX="5px"
      paddingTop={{ md: "100px" }}
    >
      <Show above="md">
        <BackButton />
      </Show>
      <ProductDetailCard product={product} />
    </Center>
  )
}

export default ProductDetailPage
