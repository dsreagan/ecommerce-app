import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react"
import { ShoppingCartCheckout } from "@mui/icons-material"
import CartItemsContainer from "./CartItemsContainer"
import useLamaStore from "../store"
import { Link } from "react-router-dom"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const CartDrawer = ({ isOpen, onClose }: Props) => {
  const cart = useLamaStore((s) => s.cart)

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Cart</DrawerHeader>
        <DrawerBody>
          <CartItemsContainer onClose={onClose} />
        </DrawerBody>
        <DrawerFooter flexDirection="column" alignItems="space-between" gap={4}>
          <Flex justify="space-evenly">
            <Text fontWeight="bold" fontSize="lg">
              {"Total: $" + cart.total}
            </Text>
          </Flex>
          <HStack w="100%" justify="space-evenly">
            <Button onClick={onClose}>Cancel</Button>
            <Link to="/checkout">
              <Button onClick={onClose}>
                <HStack>
                  <ShoppingCartCheckout />
                  <Text>Check Out</Text>
                </HStack>
              </Button>
            </Link>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer
