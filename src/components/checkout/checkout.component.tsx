import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'

import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from './checkout.styles'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return <CheckoutContainer>
    <CheckoutTitle>Checkout</CheckoutTitle>

    {products.length > 0
      ? (
      <>
       <CheckoutProducts>
      {products.map((products) => (
        <CartItem key={products.id} product={products}/>
      ))}
    </CheckoutProducts>

    <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

    <CustomButton startIcon={<BsBagCheck/>}>Finalizar Compra</CustomButton>
      </>
        )
      : (
      <p>Seu carrinho está vazio !!</p>
        )
    }

    </CheckoutContainer>
}

export default Checkout
