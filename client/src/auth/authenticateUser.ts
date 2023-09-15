import axios, { AxiosRequestConfig } from "axios"
import AuthInput from "../entities/AuthInput"

const authenticateUser = async (input: AuthInput, action: string) => {
  let data
  let config: AxiosRequestConfig = {}

  switch (action) {
    case "login":
      data = JSON.stringify({
        username: input.username,
        password: input.password,
      })
      config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://hot-lama-api.onrender.com/api/auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }

      break
    case "register":
      data = JSON.stringify({
        username: input.username,
        email: input.email,
        password: input.password,
      })

      config = {
        method: "post",
        maxBodyLength: Infinity,
        // url: "https://hot-lama-api.onrender.com/api/auth/register",
        url: "http://localhost:5000/api/auth/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      }
  }

  return await axios
    .request(config)
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response.data
    })
}

export default authenticateUser
