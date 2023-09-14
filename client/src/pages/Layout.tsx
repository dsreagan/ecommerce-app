import { Box, useDisclosure } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import AuthModal from "../components/AuthModal/AuthModal"
import CartDrawer from "../components/CartDrawer/CartDrawer"
import Navbar from "../components/Navbar/Navbar"
import PromotionBanner from "../components/PromotionBanner"
import WarningBanner from "../components/WarningBanner"
import useLamaStore from "../store"

export default function Layout() {
  const user = useLamaStore((s) => s.user)
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
      <Box w="100%" pos="fixed" top={0} zIndex={10}>
        <WarningBanner />
        {!user?.username && <PromotionBanner />}
        <Navbar openAuthModal={openAuthModal} openCartDrawer={openCartDrawer} />
      </Box>
      <Outlet />
      <AuthModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </>
  )
}
