import { useDisclosure } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import AuthModal from "../components/AuthModal"
import CartDrawer from "../components/CartDrawer"
import Navbar from "../components/Navbar"

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
      <Navbar openAuthModal={openAuthModal} openCartDrawer={openCartDrawer}/>
      <Outlet />
      <AuthModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer}/>
    </>
  )
}
