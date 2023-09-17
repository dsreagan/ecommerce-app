import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react"
// import { Link } from "react-router-dom"
import User from "../../entities/User"
import useLamaStore from "../../store"
import CartIcon from "./CartIcon"
import SearchBar from "./SearchBar"

interface Props {
  openAuthModal: () => void
  openCartDrawer: () => void
  openLogoModal: () => void
}

const Navbar = ({ openAuthModal, openCartDrawer, openLogoModal }: Props) => {
  const { user, setUser } = useLamaStore()

  const logOutUser = () => setUser({} as User)

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
      bg="white"
      h="70px"
      w="100%"
      boxShadow="0 2px 4px 0 rgba(0,0,0,.2)"
    >
      <Show above="sm">
        <GridItem>
          <HStack w="100%" h="100%" marginLeft={5}>
            <Text>EN</Text>
            <SearchBar />
          </HStack>
        </GridItem>
      </Show>
      <GridItem>
        <Flex
          justify={{ base: "start", sm: "center" }}
          align="center"
          h="100%"
          w="100%"
        >
          <Button onClick={openLogoModal}>
            <Heading size="lg" color="black">
              {/* <Link to="/">hot lama</Link> */}
              hot lama
            </Heading>
          </Button>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex justify="end" align="center" h="100%" w="100%">
          <Button
            size="sm"
            variant="link"
            marginRight={{ base: "80px", sm: "120px" }}
            fontSize="lg"
            onClick={!user?.username ? openAuthModal : logOutUser}
            _focus={{ outline: "none" }}
            color="black"
          >
            {!user?.username ? "Sign In" : "Sign Out"}
          </Button>
          <CartIcon onClick={openCartDrawer} />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Navbar
