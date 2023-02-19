import {FaUser} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import Spinner from '../components/Spinner'



function TransactionLog() {
  const {user} = useSelector((state)=> state.auth)


 
  return (
    <section className='heading'>
      <h1><FaUser />{user && user.name}'s Transaction Log</h1>
    </section>
  )
}

export default TransactionLog