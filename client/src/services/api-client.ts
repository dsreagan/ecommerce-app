import axios, { AxiosConfig } from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    // requests go here
}

export default APIClient