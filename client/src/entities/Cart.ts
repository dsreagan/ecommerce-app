export default interface Cart {
  userId?: string
  products: {
    id: string
    quantity: number
  }[]
}
