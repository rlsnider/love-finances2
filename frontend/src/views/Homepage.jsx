import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AccountForm from '../components/AccountForm'
import AccountItem from '../components/AccountItem'
import CategoryForm from '../components/CategoryForm'
import CategoryItem from '../components/CategoryItem'
import PayeeForm from '../components/PayeeForm'
import PayeeItem from '../components/PayeeItem'
import Spinner from '../components/Spinner'
import {getAccounts} from '../features/accounts/accountSlice'
import {getCategories} from '../features/categories/categorySlice'
import {getPayees} from '../features/payees/payeeSlice'


function Homepage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {accounts, isLoading, isError, message} = useSelector((state) =>
  state.accounts)
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
    
  }, [user, navigate, isError,  message, dispatch] ) 

if (isLoading) {
  return <Spinner />
}
  return (
    <>
      <section className='Heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>You are now on your way to taking control of your finances.<br/><br/></p>
        
        <h2>Accounts</h2>
        <p>Below is your list of accounts.<br/> Make one account for each bank account you wish to track.<br/>The names of your accounts must be unique.<br/>It is sugguested to add your name in front of your account. <br/>Example: Matthew's Credit Card, Sarah's Savings or Ramona's Checking</p>
      </section>
      <AccountForm />
      <section className='content'>
        {accounts.length > 0 ? (
          <div className='accounts'>
            {accounts.map((account) => (
              <AccountItem key={account._id} account={account}/>
            ) )}
          </div>
        ) : (<h3>You have not created any accounts yet.</h3>)}
        <hr /><hr />
        <br /><br/>
      </section> 
    <p>Below is a list of your categories. Create categories to track your spending.<br /> Please note that these categories must be unique to your account, < br/>therefore it is sugguested to add your name before the category.<br /> Example: Matthew's gas, Joe's Rent, Sarah's Electricity.<br/>Be sure to make an opening balance category.</p>
       <CategoryForm />
      <section className='content'>
        {categories.length > 0 ? (
          <div className='account'>
            {categories.map((category) => (
              <CategoryItem key={category._id} category={category}/>
            ) )}
          </div>
        ) : (<h3>You have not created any categories yet.</h3>)}
        <hr/><hr />
        <br /><br />
      </section>
      <p>Below is a list of your payees.<br/> Create lists of payees to keep track of who you are paying your money to.<br /> Please note that these payees must be unique to your account,<br />like the categories and accounts, so add your name before the payee.</p>
        <PayeeForm />
        <section className='content'>
        {payees.length > 0 ? (
          <div className='account'>
            {payees.map((payee) => (
              <PayeeItem key={payee._id} payee={payee}/>
            ) )}
          </div>
        ) : (<h3>You have not created any payees yet.</h3>)}
        <hr/><hr />
        <br /><br />
      </section> 
     </>
  )
}

export default Homepage