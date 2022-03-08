import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'

function posts() {
  return (
    <>
      <Head>
        <meta name="description" content="posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div>posts</div>
      <Footer/>

    </>
  )
}

export default posts
