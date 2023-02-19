import {useDispatch} from 'react-redux'
import {deleteCategory} from '../features/categories/categorySlice'

function CategoryItem({category}) {
  const dispatch = useDispatch()  
  return (
    <div className="account">
        <h2>{category.name}</h2>
        <button onClick={() => dispatch(deleteCategory(category._id))} className='close'>
            X
        </button>
    </div>
  )
}

export default CategoryItem