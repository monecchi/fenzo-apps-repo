import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Project() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.slug && `/api/services/${query.slug}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{data.title} - Fenzo Serralheria</title>
      </Head>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Subtitulo</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.title}</td>
          <td>{data.subtitle}</td>
          <td>{data.slider_upperTitle}</td>
          <td>{data.icon}</td>
          <td>{data.img_url}</td>
          <td>{data.hasImage}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}