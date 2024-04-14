import {
  Button,
  Flex,
  HStack,
  Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import User from "../../entities/User"
import useLamaStore from "../../store"
import CartIcon from "./CartIcon"
// import SearchBar from "./SearchBar"

interface Props {
  openAuthModal: () => void
  openCartDrawer: () => void
}

const Navbar = ({ openAuthModal, openCartDrawer }: Props) => {
  const { user, setUser } = useLamaStore()

  const logOutUser = () => setUser({} as User)

  return (
    <Flex
      justify="space-between"
      bg="white"
      h="50px"
      w="100%"
      boxShadow="0 2px 4px 0 rgba(0,0,0,.2)"
    >
        <Link to="/">
          <HStack gap="3px" h="100%" mt="8px" ml="15px" justify="flex-end" >
            <Text fontSize="34px" as="b" color="black">
              hot
            </Text>
            <Text fontSize="36px" color="black">
              lama
            </Text>
          </HStack>
        </Link>
      <Flex justify="end" align="end" mb="2px">
        <Button
          size="sm"
          variant="link"
          marginRight="90px"
          fontSize="lg"
          onClick={!user?.username ? openAuthModal : logOutUser}
          _focus={{ outline: "none" }}
          color="black"
        >
          {!user?.username ? "Sign In" : "Sign Out"}
        </Button>
        <CartIcon onClick={openCartDrawer} />
      </Flex>
    </Flex>
  )
}

export default Navbar
