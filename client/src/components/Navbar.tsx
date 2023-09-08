import { Button, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react"
import CartIcon from "./CartIcon"
import SearchBar from "./SearchBar"

interface Props {
  openAuthModal: () => void
  openCartDrawer: () => void
}

const Navbar = ({ openAuthModal, openCartDrawer }: Props) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
      paddingX={{ base: "5px", sm: "10px" }}
      h="70px"
      w="100%"
      pos="fixed"
      top={0}
    >
      <Show above="sm">
        <GridItem>
          <Flex justify="start" align="center" w="100%" h="100%">
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
            <Heading size="lg">hot lama</Heading>
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
            onClick={openAuthModal}
          >
            Sign In
          </Button>
          <CartIcon onClick={openCartDrawer} />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Navbar
