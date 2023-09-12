import ProductGrid from "../components/ProductGrid"
import HeroSlider from "../components/HeroSlider"
import { Box, Flex } from "@chakra-ui/react"
import CategorySelector from "../components/CategorySelector"
import { useState } from "react"

const HomePage = () => {
  const [category, setCategory] = useState("")

  return (
    <Box paddingTop={16}>
      <HeroSlider />
      <Flex w="100%" paddingX="20px" direction="column" gap={4}>
        <CategorySelector category={category} setCategory={setCategory} />
        <ProductGrid category={category} />
      </Flex>
    </Box>
  )
}

export default HomePage
