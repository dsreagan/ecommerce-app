import {
  Button,
  FormControl,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
} from "@chakra-ui/react"
import {
  KeyboardEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react"
import AuthInput from "../../entities/AuthInput"
import inputStyles from "../../styles/inputStyles"

interface Props {
  setAction: Dispatch<SetStateAction<"register" | "login">>
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>
  setInput: React.Dispatch<React.SetStateAction<AuthInput>>
  setResponseErrorMessage: React.Dispatch<React.SetStateAction<string>>
  responseErrorMessage: string
}

export default function AuthModalRegister({
  setAction,
  setSubmit,
  setInput,
  setResponseErrorMessage,
  responseErrorMessage,
}: Props) {
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsernameError(false)
    setPasswordError(false)
    setEmailError(false)
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = () => {
    if (formData.username.length < 1) {
      setUsernameError(true)
    } else if (formData.email.length < 5 || !formData.email.includes("@")) {
      setEmailError(true)
    } else if (
      formData.password.length < 1 ||
      formData.password !== formData.password2
    ) {
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
    <ModalContent alignItems="center" bg="whitesmoke" color="black">
      <ModalHeader>Create Your Account</ModalHeader>
      <FormControl>
        <ModalBody textAlign="center">
          <VStack spacing={3}>
            <Input
              size="md"
              id="username"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isInvalid={usernameError}
              {...inputStyles}
            />
            <Input
              id="email"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isInvalid={emailError}
              {...inputStyles}
            />
            <Input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isInvalid={passwordError}
              {...inputStyles}
            />
            <Input
              id="password2"
              type="password"
              placeholder="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isInvalid={passwordError}
              {...inputStyles}
            />
            {usernameError && <Text color="red">Please enter a username</Text>}
            {emailError && (
              <Text color="red">Please enter a valid email address</Text>
            )}
            {passwordError && (
              <Text color="red">Please enter matching passwords</Text>
            )}
            <Text color="red">{responseErrorMessage}</Text>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <VStack>
            <Button onClick={handleSubmit} variant="secondary">
              Register
            </Button>
            <Text>
              Already have an account?{" "}
              <Button
                variant="link"
                onClick={() => {
                  setResponseErrorMessage("")
                  setAction("login")
                }}
                color="blue.500"
              >
                Sign In
              </Button>
            </Text>
          </VStack>
        </ModalFooter>
      </FormControl>
    </ModalContent>
  )
}
