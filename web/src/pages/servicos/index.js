import React from 'react'

import Head from 'next/head'

import Navbar from '../../components/Navbar/Navbar'

import useSWR from 'swr'
import Servico from '../../components/Servico'

import './styles.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PageServices() {
  const { data, error } = useSWR('/api/services', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Fenzo Serviços</title>
      </Head>
      <div>
        <Navbar />
        <main className="main-layout">
          <div className="home-page">
            <div><h1 className="d-flex flex-column text-center">Serviços</h1></div>
            <div className="fenzo-services__container">
              <ul className="fenzo-services">
                {data && data.map((p, i) => (
                  <Servico key={i} project={p} />
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
};
