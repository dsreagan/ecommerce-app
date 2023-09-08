import { create } from "zustand"
import Cart from "./entities/Cart"
import Product from "./entities/Product"
import User from "./entities/User"

interface LamaStore {
  user?: User
  setUser: (user: User) => void
  cart: Cart
  setCart: (cart: Cart) => void
  addToCart: (product: Product) => void
  delFromCart: (product: Product) => void
}

const useStore = create<LamaStore>((set) => ({
  user: {} as User,
  cart: {} as Cart,
  setUser: (user) => set((store) => ({ ...store, user: user })),
  setCart: (cart) => set((store) => ({ ...store, cart: cart })),
  addToCart: (product) =>
    set((store) => ({
      ...store,
      cart: { ...store.cart, products: { ...store.cart.products, product } },
    })),
  delFromCart: (product) =>
    set((store) => ({
      ...store,
      cart: {
        ...store.cart,
        products: { ...store.cart.products.filter((p) => p.id !== product.id) },
      },
    })),
}))

export default useStore
