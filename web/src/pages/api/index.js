import axios from 'axios'

//
// API axios Instance
//
//
export const api = axios.create({
  baseURL: process.env.API_URL
})

//
// Fenzo Static API Entry
//
export default function handler(req, res) {
  res.status(200).json("Hello Fenzo!")
};
