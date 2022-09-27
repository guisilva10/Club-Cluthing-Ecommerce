import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

import { ProductContainer, ProductInfo, ProductImage } from './procuct-item.styles'

import Product from '../../types/product.types'
import CustomButton from '../custom-button/custom-button.component'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddProductToCart = () => {
    addProductToCart(product)
  }
  return <ProductContainer>
    <ProductImage imageUrl={product.imageUrl}/>
    <CustomButton
    onClick={handleAddProductToCart}
    startIcon={<BsCartPlus size={20}/>}
    >
      Adicionar ao carrinho
      </CustomButton>
    <ProductInfo>
      <p>{product.name}</p>
      <p>R${product.price}</p>
    </ProductInfo>
    </ProductContainer>
}

export default ProductItem
