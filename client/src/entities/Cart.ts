export default interface Cart {
  userId?: string
  items: {
    title: string
    id: string
    price: number
    quantity: number
  }[]
}
