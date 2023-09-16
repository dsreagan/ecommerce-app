import { Button, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import User from "../../entities/User"
import useLamaStore from "../../store"
import CartIcon from "./CartIcon"
import Logo from "./Logo"

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
      paddingX={{ base: "5px", sm: "10px" }}
      bg="white"
      h="70px"
      w="100%"
      boxShadow="0 2px 4px 0 rgba(0,0,0,.2)"
    >
      <Show above="sm">
        <GridItem justifyContent="center">
          <Flex h="100%" align="center" marginLeft={5}>
            <button onClick={openLogoModal}>
              <Logo />
            </button>
          </Flex>
        </GridItem>
      </Show>
      <GridItem>
        <Flex
          justify={{ base: "start", sm: "center" }}
          align="center"
          h="100%"
          w="100%"
        >
          <Heading size="lg" color="black">
            <Link to="/">hot lama</Link>
          </Heading>
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
