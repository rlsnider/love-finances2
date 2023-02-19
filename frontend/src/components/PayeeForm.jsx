import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {createPayee} from '../features/payees/payeeSlice'


function PayeeForm() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()
   
    const onSubmit = e => {
        e.preventDefault()

        dispatch(createPayee({name}))
        setName('')
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Payee</label>
            <input 
            type='text' 
            name='name' 
            id='name'
            value= {name} 
            onChange={(e) => setName(e.target.value)}/>
            </div> 
            <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                    Add Payee
                </button>
            </div>
        </form>
    </section>
  )
}

export default PayeeForm