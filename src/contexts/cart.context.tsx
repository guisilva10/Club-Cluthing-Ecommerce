import React, { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface PropsChildren{
  children: React.ReactNode
}

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (products: Product) => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})

const CartContextProvider: FunctionComponent<PropsChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible(prevState => !prevState)
  }

  const addProductToCart = (products: Product) => {
    setProducts((prevState) => [...prevState, { ...products, quantity: 1 }])
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
