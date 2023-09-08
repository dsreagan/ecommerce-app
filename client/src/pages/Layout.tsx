import { useDisclosure } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import AuthModal from "../components/AuthModal"
import Navbar from "../components/Navbar"

export default function Layout() {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Navbar openAuthModal={onOpen} />
      <Outlet />
      <AuthModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
