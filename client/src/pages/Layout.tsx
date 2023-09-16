import { Box, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import AuthModal from "../components/AuthModal/AuthModal"
import CartDrawer from "../components/CartDrawer/CartDrawer"
import LogoModal from "../components/LogoModal"
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
  const {
    isOpen: logoModalOpen,
    onClose: closeLogoModal,
    onOpen: openLogoModal,
  } = useDisclosure()

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"))
      setUser(savedUser)
      const savedCart = JSON.parse(localStorage.getItem("cart"))
      setCart(savedCart)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (user?.username) localStorage.setItem("user", JSON.stringify(user))
    else localStorage.removeItem("user")
    if (cart.items.length > 0)
      localStorage.setItem("cart", JSON.stringify(cart))
  }, [user, cart])

  return (
    <>
      <Box w="100%" pos="fixed" top={0} zIndex={10}>
        <WarningBanner />
        <Navbar
          openAuthModal={openAuthModal}
          openCartDrawer={openCartDrawer}
          openLogoModal={openLogoModal}
        />
      </Box>
      <Outlet />
      <LogoModal isOpen={logoModalOpen} onClose={closeLogoModal} />
      <AuthModal isOpen={isAuthModelOpen} onClose={closeAuthModal} />
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </>
  )
}
