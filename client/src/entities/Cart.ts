export default interface Cart {
  items: {
    title: string
    id: string
    price: number
    quantity: number
  }[],
  total: number
}
