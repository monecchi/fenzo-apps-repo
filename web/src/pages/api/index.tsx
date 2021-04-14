import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { serverURL } from '../../constants'

//
// API axios Instance
//
//
export const api = axios.create({
  baseURL: serverURL() // process.env.API_URL
})

//
// Fenzo Static API Entry
//
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json("Hello Fenzo!")
};
