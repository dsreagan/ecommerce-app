import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
} from "@chakra-ui/react"
import { ShoppingCartCheckout } from "@mui/icons-material"
import CartItemsContainer from "./CartItemsContainer"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const CartDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Cart</DrawerHeader>
        <DrawerBody>
          <CartItemsContainer />
        </DrawerBody>
        <DrawerFooter justifyContent="space-around">
          <Button onClick={onClose}>Cancel</Button>
           <Button>{/* as a tag that references react router route for checkout page */}
            <HStack>
              <ShoppingCartCheckout />
              <Text>Check Out</Text>
            </HStack>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer
