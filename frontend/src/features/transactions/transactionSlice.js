import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import transactionService from './transactionService'

const initialState = {
    transactions: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//create new transaction 
export const createTransaction = createAsyncThunk(
    'transactions/create', 
    async (transactionData, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await transactionService.createTransaction(transactionData, token)
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

//Get user Transactionss
export const getTransactions = createAsyncThunk(
    'transactions/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await transactionService.getTransactions(token)
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

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        reset:(state) => initialState,
    },
        extraReducers: (builder) => {
            builder
            //createTransaction cases
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.transactions.push(action.payload)
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //GetTransactions Cases--
            .addCase(getTransactions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTransactions.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.transactionss = action.payload
            })
            .addCase(getTransactions.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

        },
})
        
    


export const { reset }  = transactionSlice.actions
export default transactionSlice.reducer