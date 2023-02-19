import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import accountReducer from'../features/accounts/accountSlice'
import categoryReducer from '../features/categories/categorySlice'
import transactionReducer from '../features/transactions/transactionSlice'
import payeeReducer from '../features/payees/payeeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountReducer,
    categories: categoryReducer,
    transactions: transactionReducer,
    payees: payeeReducer,
  },
});
