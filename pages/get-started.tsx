import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'

function getstarted() {
  return (
    <>
      <Head>
        <meta name="description" content="getstarted" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <section className='py-5 max-w-5xl mx-auto '>

      <div className="heading pb-12 text-center flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold py-8">Getting Started</h1>

            <div className="min-h-[40vh] flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-10">
                <h2 className='text-3xl font-bold text-left'>1 . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit.</h2>
            </div>

            <div className="min-h-[40vh] flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-10">
                <h2 className='text-3xl font-bold text-left'>2 . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit.</h2>
            </div>
            
            <div className="min-h-[40vh] flex items-center bg-gradient-to-r from-green-500 to-indigo-500 text-white p-10">
                <h2 className='text-3xl font-bold text-left'>3 . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit.</h2>
            </div>

            <div className="min-h-[40vh] flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white p-10">
                <h2 className='text-3xl font-bold text-left'>4 . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, impedit.</h2>
            </div>
      </div>


      </section>
      <Footer/>
    </>
  )
}

export default getstarted
