import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CustomButton from '../custom-button/custom-button.component'

import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible} >
      <CartEscapeArea onClick={toggleCart}/>
       <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* products */}

        <CartTotal>TOTAL: R$1.000,00</CartTotal>
        <CustomButton startIcon={<BsCartCheck/>}>Ir para o Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
