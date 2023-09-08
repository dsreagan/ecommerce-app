import { SearchIcon } from "@chakra-ui/icons"
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

const SearchBar = () => {
  return (
    <InputGroup w="15%" size="xs">
      <Input />
      <InputRightElement>
        <IconButton
          aria-label="Search Products"
          icon={<SearchIcon />}
          variant="ghost"
          size="xs"
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
