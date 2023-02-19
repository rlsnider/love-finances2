import axios from 'axios'

const API_URL = '/api/payees/'

//Create new Payee
const createPayee = async (payeeData, token) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}` 
        }
    }
    const response = await axios.post(API_URL, payeeData, config)
    return response.data
}
//Get list of all payees
const getPayees = async (token) => {
    const config = {
        headers: {
           Authorization: `Bearer ${token}` 
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//Delete payee
const deletePayee = async (payeeId, token) => {
     const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
     }
     const response = await axios.delete(API_URL + payeeId, config)
     return response.data
}
const payeeService = {
    createPayee,
    getPayees,
    deletePayee,
}

export default payeeService