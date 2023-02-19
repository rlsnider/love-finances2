import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import categoryService from './categoryService'

const initialState = {
    categories: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//create new Category
export const createCategory = createAsyncThunk(
    'categories/create', 
    async (categoryData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await categoryService.createCategory(categoryData, token)
        } catch (error){
            const message =
                (error.response &&  
                    error.response.data && 
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)  
        }
    }
)

//Get user Categories
export const getCategories = createAsyncThunk(
    'categories/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await categoryService.getCategories(token)
        } catch (error) {
            const message = 
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
           error.message ||
           error.toString()
         return thunkAPI.rejectWithValue(message)
        }
    }
)
//delete category
export const deleteCategory = createAsyncThunk(
    'categories/delete', 
    async (id, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await categoryService.deleteCategory(id, token)
        } catch (error){
            const message =
                (error.response &&  
                    error.response.data && 
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)  
        }
    }
)
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        reset:(state) => initialState,
    },
        extraReducers: (builder) => {
            builder
            //create Category cases
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.categories.push(action.payload)
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //Get Category Cases--
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //delete Category Cases--
            .addCase(deleteCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.categories = state.categories.filter((category) => category._id !==
                action.payload.id) 
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        },
})
        
    


export const { reset }  = categorySlice.actions
export default categorySlice.reducer