import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

function write() {
  return (
    <>
      <Head>
        <meta name="description" content="write" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div>write</div>
      <Footer/>
    </>
  )
}

export default write
