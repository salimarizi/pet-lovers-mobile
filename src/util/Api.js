import axios from 'axios'
import { BASE_URL } from "../constants"

export default axios.create({
  baseURL: BASE_URL,//YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
})
