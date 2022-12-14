import { createContext, ReactNode, useEffect, useState } from 'react'

export interface CartItem {
  itemId: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCartItem: (itemId: number, amount: number) => void
  removeCartItem: (itemId: number) => void
  emptyCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedDateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-items-1.0.0',
    )

    if (storedDateAsJSON) {
      return JSON.parse(storedDateAsJSON)
    }

    return []
  })

  function addCartItem(itemId: number, amount: number) {
    const index = cartItems.findIndex((item) => item.itemId === itemId)

    if (index === -1) {
      setCartItems([...cartItems, { itemId, quantity: amount }])
      return
    }

    setCartItems((state) =>
      state.map((item) => {
        if (item.itemId === itemId) {
          return { ...item, quantity: item.quantity + amount }
        } else {
          return item
        }
      }),
    )
  }

  function removeCartItem(itemId: number) {
    const updatedCartList = cartItems.filter((item) => item.itemId !== itemId)

    setCartItems([...updatedCartList])
  }

  function emptyCart() {
    setCartItems([])
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{ cartItems, addCartItem, removeCartItem, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
