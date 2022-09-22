import { createContext, ReactNode, useEffect, useState } from 'react'

// interface Item {
//   id: number
//   title: string
//   description: string
//   price: number
//   urlImage: string
//   tags: string[]
// }

/*
  clicar em cart
  envia quantidade e codigo para listagem do cart
  reduce para exibir no top cart button (Que fica no header)
*/

interface CartItem {
  itemId: number
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCartItem: (itemId: number, amount: number) => void
  removeCartItem: (itemId: number) => void
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

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  )
}
