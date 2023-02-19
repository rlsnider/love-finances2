import axios from 'axios'

const API_URL = '/api/categories/'

//Create new Category
const createCategory = async (categoryData, token) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}` 
        }
    }
    const response = await axios.post(API_URL, categoryData, config)
    return response.data
}
//Get list of all categories
const getCategories = async (token) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}` 
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//Delete category
const deleteCategory = async (categoryId, token) => {
     const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
     }
     const response = await axios.delete(API_URL + categoryId, config)
     return response.data
}
const categoryService = {
    createCategory,
    getCategories,
    deleteCategory,
}

export default categoryService