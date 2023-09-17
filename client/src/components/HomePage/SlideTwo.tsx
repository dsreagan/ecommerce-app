import { HStack, Image } from "@chakra-ui/react"
import comingSoon from "../../assets/hero-images/coming-soon.jpeg"

const SlideTwo = () => {
  return (
    <HStack h="100%" gap={0}>
      <Image src={comingSoon} h="100%" />
      <Image src={comingSoon} h="100%" />
      <Image src={comingSoon} h="100%" />
      <Image src={comingSoon} h="100%" />
    </HStack>
  )
}

export default SlideTwo
