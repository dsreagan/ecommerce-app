import { Modal, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import AuthInput from "../entities/AuthInput"
import AuthModalLogin from "./AuthModalLogin"
import AuthModalRegister from "./AuthModalRegister"
import useLamaStore from "../store"
import authenticateUser from "../auth/authenticateUser"

export default function AuthModal() {
  const setUser = useLamaStore((s) => s.setUser)
  const [isOpen, setIsOpen] = useState(true)
  const [action, setAction] = useState<"register" | "login">("login")
  const [submit, setSubmit] = useState(false)
  const [input, setInput] = useState<AuthInput>({} as AuthInput)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (submit) {
      authenticateUser(input, action).then((res) => {
        // check if response is error message or data
        if (typeof res === "string") {
          setErrorMessage(res)
          setSubmit(false)
        } else if (res === undefined) {
          setErrorMessage("Something went wrong. Please try again.")
          setSubmit(false)
        } else {
          setUser({
            id: res._id,
            username: res.username,
            email: res.email,
            isAdmin: res.isAdmin,
            accessToken: res.accessTokens,
          })
          setIsOpen(false)
        }
      })
    }
  }, [submit, action, input, setUser])

  return (
    <Modal isOpen={isOpen} onClose={() => {}} size="md" isCentered>
      <ModalOverlay />
      {action === "login" && (
        <AuthModalLogin
          setAction={setAction}
          setSubmit={setSubmit}
          setInput={setInput}
          setResponseErrorMessage={setErrorMessage}
          responseErrorMessage={errorMessage}
        />
      )}
      {action === "register" && (
        <AuthModalRegister
          setAction={setAction}
          setSubmit={setSubmit}
          setInput={setInput}
          setResponseErrorMessage={setErrorMessage}
          responseErrorMessage={errorMessage}
        />
      )}
    </Modal>
  )
}
