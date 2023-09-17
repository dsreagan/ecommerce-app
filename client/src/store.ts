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
  discountCart: () => void
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
        items: [
          ...store.cart.items,
          {
            id: item.id,
            title: item.title,
            description: item.description,
            image: item.image,
            categories: item.categories,
            size: item.size,
            color: item.color,
            price: store.user?.username
              ? item.price - item.price * 0.2
              : item.price,
            quantity: 1,
          },
        ],
        total: store.user?.username
          ? store.cart.total + (item.price - item.price * 0.2)
          : store.cart.total + item.price,
      },
    })),
  onAddAnotherToCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        items: store.cart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : { ...i }
        ),
        total: store.user?.username
          ? store.cart.total + (item.price - item.price * 0.2)
          : store.cart.total + item.price,
      },
    })),
  subtractFromCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        items: store.cart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : { ...i }
        ),
        total: store.cart.total - item.price,
      },
    })),
  removeFromCart: (item) =>
    set((store) => ({
      ...store,
      cart: {
        items: store.cart.items.filter((i) => i.id !== item.id),
        total: store.cart.total - item.price * item.quantity,
      },
    })),
  discountCart: () =>
    set((store) => ({
      ...store,
      cart: {
        items: store.cart.items.map((i) => ({
          ...i,
          price: i.price - i.price * 0.2,
        })),
        total: store.cart.total - store.cart.total * 0.2,
      },
    })),
}))

export default useStore
