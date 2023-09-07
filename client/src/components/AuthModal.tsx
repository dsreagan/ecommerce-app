import { Button, Card, Input } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import login from "../auth/login"
import useLamaStore from "../store"

export default function AuthModal() {
  const { user, setUser } = useLamaStore()
  const [input, setInput] = useState({ username: "", password: "" })
  const [error, setError] = useState(false)
  const errorMessage = "Wrong username or password."

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = () => {

    // ! NEED TO CATCH AN ERROR HERE !

    login({ username: input.username, password: input.password }).then(
      (res) => {
        setUser({
          username: res?.username,
          email: res?.email,
          id: res?.id,
          isAdmin: res?.isAdmin,
          accessToken: res?.accessToken,
        })
      }
    ).catch(() => setError(true))
  }

  return (
    <Card>
      <Input
        placeholder="username"
        name="username"
        value={input.username}
        onChange={handleChange}
      />
      <Input
        placeholder="password"
        name="password"
        value={input.password}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {user?.username}
      {error && <p>{errorMessage}</p>}
    </Card>
  )
}
