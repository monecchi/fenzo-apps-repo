
import React from "react";
import Head from 'next/head'
import BaseLayout from '../../components/Layouts/BaseLayout'
import BaseContainer from '../../components/Layouts/BaseContainer'

const Contato = () => {
  return (
    <>
      <Head>
        <title>Contato - Fale Conosco</title>
      </Head>
      <BaseLayout>
        <BaseContainer>
          <h1 className="text-center">Contato</h1>
        </BaseContainer>
      </BaseLayout>
    </>
  )
}

export default Contato;
