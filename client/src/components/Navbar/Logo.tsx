import { Center, Image } from "@chakra-ui/react"
import logo from "../../assets/hotlama.jpg"

const Logo = () => {
  return (
    <Center w="55px" borderRadius={5} p={0.5} bg="black">
      <Center overflow="hidden" p={0.4} bg="black" borderRadius={5}>
        <Image
          src={logo}
          borderRadius={5}
          onClick={() => console.log("hello mfer")}
          _hover={{ cursor: "pointer" }}
        />
      </Center>
    </Center>
  )
}

export default Logo
