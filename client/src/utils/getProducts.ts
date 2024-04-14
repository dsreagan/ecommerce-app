import axios from "axios"

const getProducts = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://web-server-alb-160962343.us-east-1.elb.amazonaws.com/api/products/all",
    headers: {
      "Content-Type": "application/json",
    },
  }

  return await axios
    .request(config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

export default getProducts
