import { HStack, Image } from "@chakra-ui/react"
import discountImage from "../../assets/hero-images/discount-image.jpeg"
import fashionSale from "../../assets/hero-images/fashion-sale.jpeg"

const SlideOne = () => {
  return (
    <HStack h="100%" gap={0}>
      <Image src={discountImage} h="100%" />
      <Image src={fashionSale} h="100%" />
      <Image src={discountImage} h="100%" />
      <Image src={fashionSale} h="100%" />
    </HStack>
  )
}

export default SlideOne
