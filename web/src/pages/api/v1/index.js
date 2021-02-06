import { settings } from '../../../data/mockData'

//
// API - Site Settings
//
export default function handler(req, res) {
  res.status(200).json(settings)
};
