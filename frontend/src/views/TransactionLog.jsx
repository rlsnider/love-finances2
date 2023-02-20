import {FaUser} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import {getAccounts} from '../features/accounts/accountSlice'
import {getCategories} from '../features/categories/categorySlice'
import {getPayees} from '../features/payees/payeeSlice'



function TransactionLog() {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);
  const {accounts, isLoading, isSuccess, isError, message} = useSelector((state) => state.accounts)
  const { categories } = useSelector((state) => state.categories)
  const { payees } = useSelector((state) => state.payees)

  useEffect (() => {
    if(isError) {
      console.log(message);
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getAccounts())
    dispatch(getCategories())
    dispatch(getPayees())
    
  }, [user, navigate, isError, isSuccess, message, dispatch] ) 

 if (isLoading) {
  return <Spinner />
 }
return (
    <>
      <section className="heading">
        <h1>
         <FaUser />
          {user && user.name}'s Transaction Log
        </h1>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            {isLoading}
            {isSuccess && (
              <div>
                <label htmlFor="name">Account</label>
                <select id='accounts' name='accounts' onChange={(e) => {
                  const account = accounts.find(acc => acc.name === e.target.value);
                  const transactions = account.transactions || [];
                  const newBalance = transactions.reduce((sum, transaction) => {
                    return transaction.type === 'deposit ? sum + transaction.amount : sum - transaction.amount;'
                  }, 0);
                  setBalance(newBalance);
                }}>  
                  {accounts.map((account) => (
                  <option value={account.name} key={account._id}>{account.name}</option>
                  ))}
                </select>
              </div>
            )}
            {isError && <div>Error: {message}</div>}

            <label htmlFor='name'>Date</label>
              <input></input>
              {isLoading}
            {isSuccess && (
              <div>
                <label htmlFor="name">Payee</label>
                <select id='Payees' name='payees'>  
                  {payees.map((payee) => (
                  <option value={payee.name} key={payee._id}>{payee.name}</option>
                  ))}
                </select>
              </div>
            )}
            {isError && <div>Error: {message}</div>}
            
            {isLoading}
            {isSuccess && (
              <div>
                <label htmlFor="name">Category</label>
                <select id='categories' name='categories'>  
                  {categories.map((category) => (
                  <option value={category.name} key={category._id}>{category.name}</option>
                  ))}
                </select>
              </div>
            )}
            {isError && <div>Error: {message}</div>}

            <label htmlFor='number'>Deposit</label>
            <input></input>
            <label htmlFor='number'>Payment</label>
            <input></input>
            <label htmlFor='number'>Balance</label>
            <input type='text' value={balance.toFixed(2)} readOnly />

          </div>
          <button className='btn btn-block'>Submit</button>
        </form>
      </section>
    </>
  );
}

export default TransactionLog;