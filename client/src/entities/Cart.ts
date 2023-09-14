import CartItem from "./CartItem";

export default interface Cart {
  items: CartItem[],
  total: number
}
