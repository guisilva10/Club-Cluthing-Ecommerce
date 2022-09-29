import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible} >
      <CartEscapeArea onClick={toggleCart}/>
       <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* products */}
        {products.map((product) => (
          <CartItem key={product.id} product={product}/>
        ))}

       {productsCount > 0 && (
         <CartTotal>TOTAL: R${ productsTotalPrice }</CartTotal>
       )}

       {productsCount > 0 && (
         <CustomButton startIcon={<BsCartCheck/>}>Ir para o Checkout</CustomButton>
       )}

       {productsCount === 0 && (
        <p>Seu carrinho está vazio !!</p>
       )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
