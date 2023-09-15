import { Center, Image } from "@chakra-ui/react"
import logo from "../../assets/hotlama.jpg"

const Logo = () => {
  return (
    <Center w="60px" borderRadius={10} p={0.5} bg="black">
      <Center overflow="hidden" borderRadius={10}>
        <Image
          src={logo}
          onClick={() => console.log("hello mfer")}
          _hover={{ cursor: "pointer" }}
        />
      </Center>
    </Center>
  )
}

export default Logo
