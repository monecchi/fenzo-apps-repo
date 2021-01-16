import { projects } from '../../../util/data/mockData'

//
// Api - list all services
//
export default function handler(req, res) {
  res.status(200).json(projects)
};
