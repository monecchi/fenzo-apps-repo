import axios from 'axios'

//
// Set up axios API Instance
//
//
export const api = axios.create({
  baseURL: process.env.API_URL
})
