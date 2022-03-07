import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

function Story() {
  return (
    <>
      <Head>
        <meta name="description" content="Our Story" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div>Our Story</div>
      <Footer/>
    </>
  )
}

export default Story
