import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Blogs from './components/Blogs'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { sanityClient, urlFor } from '../sanity.js'
import { Post } from '../typings-d'
import Footer from '../components/Footer'
import PostList from '../components/PostList'

interface Props {
  posts: Post[]
}

const Home = ({ posts }: Props) => {
  return (
    <div className="">
      <Head>
        <meta name="description" content="My Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Header />
      <Hero />
      <PostList posts={posts} />
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
