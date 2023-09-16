import { Flex, Image } from "@chakra-ui/react"

interface Props {
  image: string
}

const ProductImage = ({ image }: Props) => {
  return (
    <Flex
      overflow="hidden"
      alignItems="center"
      maxHeight="100%"
      borderRadius={5}
    >
      <Image src={image} borderRadius={5} />
    </Flex>
  )
}

export default ProductImage
