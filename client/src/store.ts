import { create } from "zustand"
import Cart from "./entities/Cart"
import CartItem from "./entities/CartItem"
import User from "./entities/User"

interface LamaStore {
  user?: User
  setUser: (user: User) => void
  cart: Cart
  setCart: (cart: Cart) => void
  addToCart: (item: CartItem) => void
  subtractFromCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
}

const useStore = create<LamaStore>((set) => ({
  user: {} as User,
  cart: { items: [{ title: "hat", id: "123", price: 10, quantity: 1 }] },
  setUser: (user) => set((store) => ({ ...store, user: user })),
  setCart: (cart) => set((store) => ({ ...store, cart: cart })),
  addToCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        ...store.cart,
        items: store.cart.items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : {
                title: item.title,
                id: item.id,
                price: item.price,
                quantity: item.quantity,
              }
        ),
      },
    })),
  subtractFromCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        ...store.cart,
        items: store.cart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : { ...i }
        ),
      },
    })),
  removeFromCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        ...store.cart,
        items: store.cart.items.filter((i) => i.id !== item.id),
      },
    })),
}))

export default useStore
