import { SearchIcon } from "@chakra-ui/icons"
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import { ChangeEvent, KeyboardEvent, useState } from "react"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch()
  }

  const handleSearch = () => {
    console.log(searchInput)
  }

  return (
    <InputGroup w="50%" size="xs">
      <Input
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        bg="blackAlpha.200"
      />
      <InputRightElement>
        <IconButton
          aria-label="Search Products"
          icon={<SearchIcon color="blackAlpha.500" />}
          variant="ghost"
          size="xs"
          onClick={handleSearch}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
