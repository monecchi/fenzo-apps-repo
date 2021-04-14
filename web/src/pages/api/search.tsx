import type { NextApiRequest, NextApiResponse } from 'next'
//import { useRouter } from 'next/router'
import { projects } from '../../data/mockData'

//const posts = projects;

// const router = useRouter()
// const {query} = router.query

export default (req: NextApiRequest, res: NextApiResponse) => {

  const query: string = req.query.q as string

  const results = req.query.q ?
  projects.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.search_keys.toLowerCase().includes(query.toLowerCase())) : []
  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ results }))
};
