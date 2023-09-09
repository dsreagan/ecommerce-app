import { Box, useDisclosure } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import AuthModal from "../components/AuthModal"
import CartDrawer from "../components/CartDrawer"
import Navbar from "../components/Navbar"
import WarningBanner from "../components/WarningBanner"

export default function Layout() {
  const {
    isOpen: isAuthModelOpen,
    onClose: closeAuthModal,
    onOpen: openAuthModal,
  } = useDisclosure()

  const {
    isOpen: isCartDrawerOpen,
    onClose: closeCartDrawer,
    onOpen: openCartDrawer,
  } = useDisclosure()

  return (
    <>
      <Box w="100%" pos="fixed" top={0} bg="lightblue">
        <WarningBanner />
        <Navbar openAuthModal={openAuthModal} openCartDrawer={openCartDrawer} />
      </Box>
      <Box paddingY={16} paddingX={5}>
        <Outlet />
      </Box>
      <AuthModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </>
  )
}
