import { ChevronLeftIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <Link to="/">
      <IconButton
        aria-label="Go back"
        icon={<ChevronLeftIcon />}
        fontSize="24px"
        variant="outline"
        pos="absolute"
        top={32}
        left={5}
      />
    </Link>
  )
}

export default BackButton
