import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import Category from '../../types/category.types'
import Loading from '../loading/loading.component'
import { BiChevronLeft } from 'react-icons/bi'

import { Container, CategoryTitle, ProductContainer, IconContainer } from './category-details.styles'
import ProductItem from '../product-item/product-item.component'
import { useNavigate } from 'react-router-dom'

interface CategorDetailsProps{
  categoryId:string
}

const CategoryDetails: FunctionComponent<CategorDetailsProps> = ({ categoryId }) => {
  const [isloading, setIsLoading] = useState(false)
  const [category, setCategory] = useState<Category | null>(null)

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(query(
          collection(db, 'categories').withConverter(categoryConverter),
          where('id', '==', categoryId)
        )
        )
        const category = querySnapshot.docs[0]?.data()

        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])

  if (isloading) return <Loading/>

  return (

    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
      <BiChevronLeft size={36} />
        </IconContainer>
    <p>Explorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </ProductContainer>
    </Container>

  )
}
export default CategoryDetails
