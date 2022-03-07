import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

function getstarted() {
  return (
    <>
      <Head>
        <meta name="description" content="getstarted" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div>getstarted</div>
      <Footer/>
    </>
  )
}

export default getstarted
