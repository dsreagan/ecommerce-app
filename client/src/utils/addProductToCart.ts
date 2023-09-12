import Product from "../entities/Product"

interface Params {
  product: Product
  quantity: number
}

const addProductToCart = ({ product, quantity }: Params) => {

  const itemAdded = {
    title: product.title,
    id: product._id,
    price: product.price,
    quantity: 1,
  }

  let inCart = false
  cart.items.forEach((item) => {
    if (item.id === itemAdded.id) inCart = true
  })
  inCart === false ? onAddFirstToCart(itemAdded) : onAddAnotherToCart(itemAdded)
}

export default addProductToCart