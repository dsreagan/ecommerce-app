import axios from "axios"

// useRegisterUser({
//   username: "example60",
//   email: "example60@gmail.com",
//   password: "expw",
// })

interface Props {
  username: string
  password: string
}

const login = ({ username, password }: Props) => {
  const data = JSON.stringify({
    username: username,
    password: password,
  })

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://hot-lama-api.onrender.com/api/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  return axios
    .request(config)
    .then((res) => {
      console.log(JSON.stringify(res.data))
      return {
        id: res.data._id,
        username: res.data.username,
        email: res.data.email,
        isAdmin: res.data.isAdmin,
        accessToken: res.data.accessToken,
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export default login
