import axios from 'axios'

//
// API axios Instance
//
export const api = axios.create({
  baseURL: 'http://localhost:3000'
})

//
// Fenzo Static API Entry
//
export default function handler(req, res) {
  res.status(200).json("Hello Fenzo!")
};
