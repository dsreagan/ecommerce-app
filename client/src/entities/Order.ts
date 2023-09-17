import CartItem from "./CartItem"
import Address from "./Address"

export default interface Order {
  id: string
  items: CartItem[]
  total: number
  address: Address
  status: string
}
