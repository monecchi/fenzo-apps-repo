const siteUrl = (slug) => {
  const url =
    process.env.NODE_ENV === 'production'
      ? process.env.API_URL
      : 'http://localhost:3000'
  return `${url}${slug || ''}`
}

export default siteUrl
