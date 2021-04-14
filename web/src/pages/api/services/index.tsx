import type { NextApiRequest, NextApiResponse } from 'next'
import { projects } from '../../../data/mockData'

//
// API - List all projects (services)
//
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects)
};
