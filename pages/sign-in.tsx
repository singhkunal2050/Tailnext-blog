import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

function signin() {
  return (
    <>
      <Head>
        <meta name="description" content="signin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div>signin</div>
      <Footer/>

    </>
  )
}

export default signin
