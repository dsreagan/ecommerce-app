export default interface Product {
  id: string
  title: string
  description?: string
  image?: string
  categories?: string[]
  size?: string
  color?: string
  price: number
}
