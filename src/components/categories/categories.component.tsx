import { useEffect, useState } from 'react'
import axios from 'axios'

// utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

// styles
import './categories.style.css'
import CategoryItem from '../category-item/category-item.component'
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
      <div className="categories-container">
        <div className="categories-content">
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryItem category={category}/>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Categories