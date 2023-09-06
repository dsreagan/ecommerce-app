import { useQuery } from '@tanstack/react-query'
import Cart from '../entities/Cart'
import APIClient from '../services/api-client'

const apiClient = new APIClient<Cart>("/carts")

const useCreateCart = () => 
    useQuery({
        queryKey: ["create cart"],
        queryFn: () => apiClient.postCart()
    })

export default useCreateCart