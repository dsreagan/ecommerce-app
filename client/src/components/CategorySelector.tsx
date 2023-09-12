import { Select } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface Props {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategorySelector = ({ category, setCategory }: Props) => {
  //
  const onSelectCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }

  return (
    <Select
      w="200px"
      placeholder="All"
      variant="flushed"
      value={category}
      onChange={onSelectCategory}
    >
      <option value="men">Men</option>
      <option value="women">Women</option>
    </Select>
  )
}

export default CategorySelector
