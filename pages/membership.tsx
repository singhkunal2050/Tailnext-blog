import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import Link from 'next/link'
function membership() {
  return (
    <>
      <Head>
        <meta name="description" content="Membership" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <section className='py-5 max-w-5xl mx-auto '>

      <div className="heading pb-12 text-center">
            <h1 className="text-4xl font-extrabold py-8">Memberships</h1>

            <div className="membership-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-2">

              <div className="card bg-white py-8 shadow-sm border-2 border-orange-200  hover:shadow-xl hover:border-orange-400 hover:bg-orange-300 transition-all ease-in-out">
                  <h2 className='text-3xl mb-5'><strong>$45</strong>/Month</h2>
                  <h3 className='text-xl font-extrabold mb-5'>Gold Plan</h3>
                  <p className='leading-5 mb-5 px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum numquam inventore corrupti?</p>
                  <li  className="rounded-3xl bg-black p-2 text-white max-w-[8rem] mx-auto">
                    <Link href={'/get-started'} > Try Now</Link>
                 </li>
               </div>
               <div className="card bg-white py-8 shadow-sm border-2 border-blue-200  hover:shadow-xl hover:border-blue-400 hover:bg-blue-300 transition-all ease-in-out">
                  <h2 className='text-3xl mb-5'><strong>$95</strong>/Month</h2>
                  <h3 className='text-xl font-extrabold mb-5'>Diamond Plan</h3>
                  <p className='leading-5 mb-5 px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum numquam inventore corrupti?</p>
                  <li  className="rounded-3xl bg-black p-2 text-white max-w-[8rem] mx-auto">
                    <Link href={'/get-started'} > Try Now</Link>
                 </li>
               </div>

               <div className="card bg-white py-8 shadow-sm border-2 border-green-200  hover:shadow-xl hover:border-green-400 hover:bg-green-300 transition-all ease-in-out">
                  <h2 className='text-3xl mb-5'><strong>$145</strong>/Month</h2>
                  <h3 className='text-xl font-extrabold mb-5'>Platinum Plan</h3>
                  <p className='leading-5 mb-5 px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum numquam inventore corrupti?</p>
                  <li  className="rounded-3xl bg-black p-2 text-white max-w-[8rem] mx-auto">
                    <Link href={'/get-started'} > Try Now</Link>
                 </li>
               </div>

            </div>
      </div>


      </section>
      <Footer/>

    </>
  )
}

export default membership
