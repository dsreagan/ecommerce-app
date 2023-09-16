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
      color="black"
      boxShadow="md"
    >
      <option value="men">Men</option>
      <option value="women">Women</option>
      <option value="accessories">Accessories</option>
      <option value="fragrances">Fragrances</option>
      <option value="clothing">Clothing</option>
      <option value="shoes">Shoes</option>
      <option value="skin care">Skin Care</option>
      <option value="bags">Bags</option>
      <option value="electronics">Electronics</option>
    </Select>
  )
}

export default CategorySelector
