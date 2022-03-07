import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Blogs from './components/Blogs'
import Header from './components/Header'
import Hero from './components/Hero'
import { sanityClient, urlFor } from '../sanity.js'
import { Post } from '../typings-d'
import Link from 'next/link'
import Footer from './components/Footer'

interface Props {
  posts: Post[]
}

const Home = ({ posts }: Props) => {
  return (
    <div className="">
      <Head>
        <meta name="description" content="My Blog" />
      </Head>
      <Header />
      <Hero />
      <section className="blogs">
        <div className="mx-auto max-w-5xl py-10">
          <div className="heading pb-7 text-center">
            <h1 className="text-4xl font-extrabold">Blogs</h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-20">
            {posts.map((post) => (
              <div
                key={post._id}
                className=" card cursor-pointer rounded-sm border-2 pb-2  shadow-md hover:bg-[#efefef]"
              >
                <Link key={post._id} href={`/post/${post.slug.current}`}>
                  <div>
                    <div className="card-img">
                      <img
                        src={urlFor(post.mainImage).url()}
                        alt=""
                        className="overflow-hidden"
                      />
                    </div>
                    <div className="card-txt p-4">
                      <h1 className="text-2xl font-bold">{post.title}</h1>
                      <p>{post.description}</p>
                    </div>
                    <div className="author flex items-center gap-2 py-2 px-4">
                      <img
                        src={urlFor(post.author.image).url()}
                        alt=""
                        className="max-w-[13%] rounded-full"
                      />
                      <h2 className="font-sans font-bold">
                        {post.author.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {/* <div className="card rounded-sm border-2  shadow-md ">
              <div className="card-img">
                <img
                  src="//source.unsplash.com/800x451?programming"
                  alt=""
                  className="overflow-hidden"
                />
              </div>
              <div className="card-txt p-4">
                <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, nobis modi
                </p>
              </div>
            </div>

            <div className="card rounded-sm border-2  shadow-md ">
              <div className="card-img">
                <img
                  src="//source.unsplash.com/800x450?java"
                  alt=""
                  className="overflow-hidden"
                />
              </div>
              <div className="card-txt p-4">
                <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, nobis modi
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
        _id,
        title,
        author ->{
         name,
         image
        },
        description,
        mainImage,
        slug,
    }`
  // Getting Data from Sanity and sending via props
  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
