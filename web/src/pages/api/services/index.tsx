import { projects } from '../../../data/mockData'

//
// API - List all projects (services)
//
export default function handler(req, res) {
  res.status(200).json(projects)
};
