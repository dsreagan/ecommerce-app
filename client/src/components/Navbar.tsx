import { Flex } from "@chakra-ui/react"
import SearchBar from "./SearchBar"

const Navbar = () => {
    
  return (
    <Flex h="55px" justify="space-between" align="center">
      <SearchBar />
    </Flex>
  )
}

export default Navbar
