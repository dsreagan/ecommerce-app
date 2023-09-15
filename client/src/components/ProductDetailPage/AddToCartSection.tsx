import { CheckIcon } from "@chakra-ui/icons"
import { VStack, HStack, Text, Center } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Product from "../../entities/Product"
import AddMultipleButtonGroup from "./AddMultipleButtonGroup"

interface Props {
  product: Product
}

const AddToCartSection = ({ product }: Props) => {
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    setTimeout(() => setAddedToCart(false), 1000)
  })

  return (
    <Center h="100%" w="100%" position="relative">
      <VStack>
        <AddMultipleButtonGroup
          product={product}
          setAddedToCart={setAddedToCart}
        />
        {addedToCart && (
          <HStack pos="absolute" bottom={2}>
            <CheckIcon />
            <Text fontSize="xl">Added</Text>
          </HStack>
        )}
      </VStack>
    </Center>
  )
}

export default AddToCartSection
