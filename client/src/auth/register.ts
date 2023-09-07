import axios from "axios"

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

  const data = JSON.stringify({
    username: username,
    email: email,
    password: password,
  })

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://hot-lama-api.onrender.com/api/auth/register`,
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

export default useRegisterUser