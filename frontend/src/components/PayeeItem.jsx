import {useDispatch} from 'react-redux'
import {deletePayee} from '../features/payees/payeeSlice'

function PayeeItem({payee}) {
  const dispatch = useDispatch()  
  return (
    <div className="account">
        <h2>{payee.name}</h2>
        <button onClick={() => dispatch(deletePayee(payee._id))} className='close'>
            X
        </button>
    </div>
  )
}

export default PayeeItem