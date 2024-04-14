import ProductGrid from "../components/HomePage/ProductGrid"
import HeroSlider from "../components/HomePage/HeroSlider"
import { Box, Flex } from "@chakra-ui/react"
import CategorySelector from "../components/HomePage/CategorySelector"
import { useState } from "react"

const HomePage = () => {
  const [category, setCategory] = useState("")

  return (
    <Box paddingY="76px">
      <HeroSlider />
      <Flex w="100%" paddingX="20px" direction="column" gap={4}>
        <CategorySelector category={category} setCategory={setCategory} />
        <ProductGrid category={category} />
      </Flex>
    </Box>
  )
}

export default HomePage
