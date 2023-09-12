import { create } from "zustand"
import Cart from "./entities/Cart"
import CartItem from "./entities/CartItem"
import User from "./entities/User"

interface LamaStore {
  user?: User
  setUser: (user: User) => void
  cart: Cart
  setCart: (cart: Cart) => void
  onAddFirstToCart: (item: CartItem) => void
  onAddAnotherToCart: (item: CartItem) => void
  subtractFromCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
}

const useStore = create<LamaStore>((set) => ({
  user: {} as User,
  cart: { items: [], total: 0 },
  setUser: (user) => set((store) => ({ ...store, user: user })),
  setCart: (cart) => set((store) => ({ ...store, cart: cart })),
  onAddFirstToCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        total: store.user?.username
          ? store.cart.total + item.price - item.price * 0.2
          : store.cart.total + item.price,
        items: [
          ...store.cart.items,
          {
            title: item.title,
            id: item.id,
            price: store.user?.username
              ? item.price - item.price * 0.2
              : item.price,
            quantity: 1,
          },
        ],
      },
    })),
  onAddAnotherToCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        total: store.user?.username
          ? store.cart.total + item.price - item.price * 0.2
          : store.cart.total + item.price,
        items: store.cart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : { ...i }
        ),
      },
    })),
  subtractFromCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        total: store.cart.total - item.price,
        items: store.cart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : { ...i }
        ),
      },
    })),
  removeFromCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        total: store.cart.total - item.price * item.quantity,
        items: store.cart.items.filter((i) => i.id !== item.id),
      },
    })),
}))

export default useStore
