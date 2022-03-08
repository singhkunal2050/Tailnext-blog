import Header from './components/Header'
import Head from 'next/head'
import Footer from './components/Footer'
import Link from 'next/link'
import { Post } from '../typings-d'
import { sanityClient, urlFor } from '../sanity.js'

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
          </div>
        </div>
      </section>
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
  