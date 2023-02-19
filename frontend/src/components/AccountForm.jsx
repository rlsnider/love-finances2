import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {createAccount} from '../features/accounts/accountSlice'

function AccountForm() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()
   
    const onSubmit = e => {
        e.preventDefault()

        dispatch(createAccount({name}))
        setName('')
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Account</label>
            <input 
            type='text' 
            name='name' 
            id='name' 
            value= {name} 
            onChange={(e) => setName(e.target.value)}/>
            </div> 
            <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                    Add Account
                </button>
            </div>
        </form>
    </section>
  )
}

export default AccountForm