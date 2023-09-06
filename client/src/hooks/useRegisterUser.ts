import axios from "axios"
import useLamaStore from "../store"

// useRegisterUser({
//   username: "example60",
//   email: "example60@gmail.com",
//   password: "expw",
// })

interface Props {
  username: string
  email: string
  password: string
}

const useRegisterUser = ({ username, email, password }: Props) => {
  const setUser = useLamaStore(s => s.setUser)

  const data = JSON.stringify({
    username: username,
    email: email,
    password: password,
  })

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `http://localhost:5000/api/auth/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  axios
    .request(config)
    .then((res) => {
      setUser({
        id: res.data._id,
        username: res.data.username,
        email: res.data.email,
        isAdmin: res.data.isAdmin,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export default useRegisterUser
