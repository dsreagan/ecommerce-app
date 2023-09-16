import {
  Center,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { ChangeEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartItem from "../../entities/CartItem"

interface Props {
  item: CartItem
}

const CheckoutItem = ({ item }: Props) => {
  const [newValue, setNewValue] = useState(item.quantity)

  useEffect(() => {
    console.log(newValue)
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewValue(parseInt(event.target.value))
  }

  return (
    <>
      <Flex justify="space-between">
        <HStack gap={5}>
          <Center w="60px" h="60px" overflow="hidden" borderRadius={5}>
            <Image src={item.image} borderRadius={5} />
          </Center>
          <VStack align="start">
            <Heading size="md">
              <Link to={"/products/" + item.id}>{item.title}</Link>
            </Heading>
            {item.color !== "" && <Text>{"color: " + item.color}</Text>}
            {item.size !== "" && <Text>{"size: " + item.size}</Text>}
          </VStack>
        </HStack>
        <VStack>
          <Text opacity={0.8}>${item.price}</Text>
          <HStack>
            <Text>{"x "}</Text>
            <Editable opacity={0.8} defaultValue={item.quantity.toString()}>
              <EditablePreview />
              <EditableInput
                value={newValue}
                onChange={handleChange}
              />
            </Editable>
          </HStack>
          <Divider />
          <Text fontWeight="bold" fontSize="lg">
            ${item.quantity * item.price}
          </Text>
        </VStack>
      </Flex>
      <Divider />
    </>
  )
}

export default CheckoutItem
