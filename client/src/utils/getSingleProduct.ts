import axios from "axios"

const getSingleProduct = async (id: string | undefined) => {

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://hot-lama-api.onrender.com/api/products/find/${id}`,
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

export default getSingleProduct
