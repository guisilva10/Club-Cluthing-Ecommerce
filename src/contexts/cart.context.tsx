import React, { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'

interface PropsChildren{
  children: React.ReactNode
}

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}

})

const CartContextProvider: FunctionComponent<PropsChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])
  const toggleCart = () => {
    setIsVisible(prevState => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
