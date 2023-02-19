import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import payeeService from './payeeService'

const initialState = {
    payees: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//create new payee 
export const createPayee = createAsyncThunk(
    'payees/create', 
    async (payeeData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await payeeService.createPayee(payeeData, token)
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

//Get user Payees
export const getPayees = createAsyncThunk(
    'payees/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await payeeService.getPayees(token)
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
//delete payee 
export const deletePayee = createAsyncThunk(
    'payees/delete', 
    async (id, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await payeeService.deletePayee(id, token)
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
export const payeeSlice = createSlice({
    name: 'payee',
    initialState,
    reducers: {
        reset:(state) => initialState,
    },
        extraReducers: (builder) => {
            builder
            //createPayee cases
            .addCase(createPayee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPayee.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.payees.push(action.payload)
            })
            .addCase(createPayee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //GetPayees Cases--
            .addCase(getPayees.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPayees.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.payees = action.payload
            })
            .addCase(getPayees.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //deletePayee Cases--
            .addCase(deletePayee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePayee.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.payees = state.payees.filter((payee) => payee._id !==
                action.payload.id) 
            })
            .addCase(deletePayee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        },
})
        
    


export const { reset }  = payeeSlice.actions
export default payeeSlice.reducer