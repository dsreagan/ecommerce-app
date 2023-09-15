import { Flex, Image } from "@chakra-ui/react"

interface Props {
  image: string
}

const ProductImage = ({ image }: Props) => {
  return (
    <Flex
      overflow="hidden"
      height="100%"
      alignItems="center"
      bg="#F5F5F5"
      borderRadius={5}
    >
      <Image src={image} />
    </Flex>
  )
}

export default ProductImage
