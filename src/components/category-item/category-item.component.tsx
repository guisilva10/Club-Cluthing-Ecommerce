import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'

import './category-item.styles.css'

interface CategoryItemProps{
  category:Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div className="category-item-container" style={{ backgroundImage: category.imageUrl }}>
      <div className="category-name">
       <p> {category.displayName}</p>
       <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
