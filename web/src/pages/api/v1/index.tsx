import type { NextApiRequest, NextApiResponse } from 'next'
import { settings } from '../../../data/mockData'

//
// API - Site Settings
//
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(settings)
};
