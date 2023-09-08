import axios from "axios"

interface Props {
  username: string
  password: string
}

const loginUser = ({ username, password }: Props) => {
  const data = JSON.stringify({
    username: username,
    password: password,
  })

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    // url: "https://hot-lama-api.onrender.com/api/auth/login",
    //Until you catch the errors properly on api
    url: "http://localhost:5000/api/auth/login",
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

export default loginUser
