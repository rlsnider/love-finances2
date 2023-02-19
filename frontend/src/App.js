import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './views/Homepage'
import Login from './views/Login'
import Register from './views/Register'
import TransactionLog from './views/TransactionLog'
import Header from './components/Header'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
 <>
  <Router>
    <div className='container'>
    <Header />
      <Routes>
        <Route path='/' element ={<Homepage />}/>
        <Route path='/login' element ={<Login />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/transactions' element ={<TransactionLog />} />
      </Routes>
    </div>
  </Router>
  <ToastContainer />
 </>
  );
}

export default App;
