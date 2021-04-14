import Prismic from 'prismic-javascript'

// Secret environment variables
const PRISMIC_API_ENDPOINT = process.env.PRISMIC_API_URL;
const PRISMIC_API_TOKEN = process.env.PRISMIC_TOKEN;

/**
 * Get all the documents of the type work
 * from Prismic CMS
 *
 * @returns {array} The array of all documents of the type post
 */
export default async function getPrismicContent(req, res) {

  const docType = req.query.type // /api/docs?type="post"
  const perPage = req.query.perpage // /api/docs?type="post"&perpage=3
  const api = await Prismic.getApi(PRISMIC_API_ENDPOINT, { accessToken: PRISMIC_API_TOKEN });
  const response = await api.query(Prismic.Predicates.at('document.type', docType || 'post'), { orderings: '[my.post.created desc]', pageSize: perPage || 10, page: 1 });

  res.status(200)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(response.results))

  //res.send(response.results);
}
