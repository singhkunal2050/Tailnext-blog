import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

function membership() {
  return (
    <>
      <Head>
        <meta name="description" content="Membership" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div>Membership</div>
      <Footer/>

    </>
  )
}

export default membership
