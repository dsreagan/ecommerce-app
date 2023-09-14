import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
  Text,
} from "@chakra-ui/react"
import CartIcon from "./CartIcon"
import SearchBar from "./SearchBar"
import useLamaStore from "../../store"
import User from "../../entities/User"
import { Link } from "react-router-dom"

interface Props {
  openAuthModal: () => void
  openCartDrawer: () => void
}

const Navbar = ({ openAuthModal, openCartDrawer }: Props) => {
  const { user, setUser } = useLamaStore()

  const logOutUser = () => setUser({} as User)

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
      paddingX={{ base: "5px", sm: "10px" }}
      bg="blue.800"
      h="70px"
      w="100%"
    >
      <Show above="sm">
        <GridItem>
          <Flex justify="start" align="center" w="100%" h="100%" gap={2}>
            <Text>EN</Text>
            <SearchBar />
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
          <Button bg="transparent" _hover={{ bg: "transparent" }} p="5px">
            <Heading size="lg">
              <Link to="/">hot lama</Link>
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
            fontWeight="normal"
            onClick={!user?.username ? openAuthModal : logOutUser}
            _focus={{ outline: "none" }}
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
