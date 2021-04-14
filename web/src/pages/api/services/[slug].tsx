import type { NextApiRequest, NextApiResponse } from 'next'
import { projects } from '../../../data/mockData'

// req: NextApiRequest, res: NextApiResponse

//
// Project route handler, needs to be string, both id and slug
//
export default function projectHandler({ query: { slug } }, res: NextApiResponse) {
  const filtered = projects.filter((p) => p.slug === slug || p.id == slug)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with slug: ${slug} not found.` })
  }
};
