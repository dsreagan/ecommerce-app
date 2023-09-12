import ProductGrid from "../components/ProductGrid"
import HeroSlider from "../components/HeroSlider"
import { Box } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Box paddingTop={16}>
      <HeroSlider />
      <ProductGrid />
    </Box>
  )
}

export default HomePage
