import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
  ModalHeader,
  FormControl,
  ModalContent,
} from "@chakra-ui/react"
import {
  KeyboardEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react"
import AuthInput from "../../entities/AuthInput"

interface Props {
  setAction: Dispatch<SetStateAction<"register" | "login">>
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>
  setInput: React.Dispatch<React.SetStateAction<AuthInput>>
  setResponseErrorMessage: React.Dispatch<React.SetStateAction<string>>
  responseErrorMessage: string
}

export default function AuthModalLogin({
  setAction,
  setSubmit,
  setInput,
  setResponseErrorMessage,
  responseErrorMessage,
}: Props) {
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [formData, setFormData] = useState({ username: "", password: "" })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameError(false)
    setPasswordError(false)
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = () => {
    if (formData.username.length < 1) {
      setUsernameError(true)
    } else if (formData.password.length < 1) {
      setPasswordError(true)
    } else {
      setInput({ username: formData.username, password: formData.password })
      setSubmit(true)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSubmit()
  }

  return (
    <ModalContent alignItems="center">
      <ModalHeader>Welcome Back</ModalHeader>
      <FormControl>
        <ModalBody textAlign="center">
          <VStack spacing={3}>
            <Input
              id="username"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isInvalid={usernameError}
            />
            <Input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={passwordError}
              onKeyDown={handleKeyDown}
            />
            {usernameError && (
              <Text color="red.300">Please enter a username</Text>
            )}
            {passwordError && (
              <Text color="red.300">Please enter your password</Text>
            )}
            <Text color="red.300">{responseErrorMessage}</Text>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <VStack>
            <Button onClick={handleSubmit}>Sign In</Button>
            <Text>
              Don't have an account?{" "}
              <Button
                variant="link"
                onClick={() => {
                  setResponseErrorMessage("")
                  setAction("register")
                }}
              >
                Register
              </Button>
            </Text>
          </VStack>
        </ModalFooter>
      </FormControl>
    </ModalContent>
  )
}
