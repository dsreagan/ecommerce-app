export default interface Order {
  id: string
  userId: string
  products: {
    productId: string
    quantity: number
  }[]
  amount: number
  //address: {} //find out what this object looks like
  status: string
}