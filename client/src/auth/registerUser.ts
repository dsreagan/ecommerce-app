import axios from "axios"

interface Props {
  username: string
  email: string
  password: string
}

const registerUser = ({ username, email, password }: Props) => {

  const data = JSON.stringify({
    username: username,
    email: email,
    password: password,
  })

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    // url: "https://hot-lama-api.onrender.com/api/auth/register",
    //Until you catch the errors properly on api
    url: "http://localhost:5000/api/auth/register",
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

export default registerUser
