import { Box, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import AuthModal from "../components/AuthModal/AuthModal"
import CartDrawer from "../components/CartDrawer/CartDrawer"
import Navbar from "../components/Navbar/Navbar"
import WarningBanner from "../components/WarningBanner"
import useLamaStore from "../store"

export default function Layout() {
  const { user, setUser, cart, setCart } = useLamaStore()
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
  

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user")!)
      if (savedUser?.username) setUser(savedUser)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")!)
      if (savedCart.items.length > 0) setCart(savedCart)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (user?.username) localStorage.setItem("user", JSON.stringify(user))
    else localStorage.removeItem("user")
  }, [user])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <Box w="100%" pos="fixed" top={0} zIndex={10}>
        <WarningBanner />
        <Navbar
          openAuthModal={openAuthModal}
          openCartDrawer={openCartDrawer}
        />
      </Box>
      <Outlet />
      <AuthModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </>
  )
}
