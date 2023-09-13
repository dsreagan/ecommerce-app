import { Divider, Flex, Heading, Text } from "@chakra-ui/react"
import CartItem from "../entities/CartItem"

interface Props {
  item: CartItem
}

const CheckoutItem = ({ item }: Props) => {
  return (
    <>
      <Flex justify="space-between">
        <Flex><Heading size="md">{item.title}</Heading><Text></Text></Flex>
        <Flex>{item.price}</Flex>
      </Flex>
      <Divider />
    </>
  )
}

export default CheckoutItem
