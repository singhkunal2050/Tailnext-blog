import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Post } from '../typings-d'
import { sanityClient, urlFor } from '../sanity.js'
import PostList from '../components/PostList'


interface Props {
    posts: Post[]
}

function posts({ posts }: Props) {
  return (
    <>
      <Head>
        <meta name="description" content="posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <PostList posts={posts} />
      <Footer/>

    </>
  )
}

export default posts


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
  