import { sanityClient, urlFor } from '../../sanity'
import Header from '../components/Header'
import { Post } from '../../typings-d'
import { GetStaticProps } from 'next'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Props {
  post: Post
}

interface IFormType {
  _id: string
  email: string
  name: string
  comment: string
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>()

  const onSubmit: SubmitHandler<IFormType> = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
        setSubmitted(true)
      })
      .catch((err) => {
        console.warn(err)
        setSubmitted(false)
      })
  }

  console.log(post)


  return (
    <React.Fragment>
      <Header />
      <main>
        <div>
          <img
            className="max-h-72 w-full object-cover"
            src={urlFor(post.mainImage).url()}
            alt=""
          />
        </div>
        <article className="prose mx-auto max-w-5xl px-4 pt-4">
          <h2 className="mb-0 pt-2">{post.title}</h2>
          <h6 className="my-0 text-gray-400">{post.description}</h6>
          <div className="author flex items-center gap-2  ">
            <img
              className="my-0 w-12 rounded-full"
              src={urlFor(post.author.image).url()}
              alt=""
            />
            <p className="text-gray-400">
              Blog Post by <strong>{post.author.name}</strong> |{' '}
              {/* {new Date(post._createdAt).toLocaleString().split(',')[0]} */}
            </p>
          </div>

          <PortableText content={post.body} />
        </article>

        {submitted ? (
          <div className="prose mx-auto max-w-5xl  bg-green-600 p-4 px-4 py-6 text-white">
            <h1 className=" text-center text-xl font-bold text-white ">
              Comment Submitted ✅
            </h1>
            <p className="text-center text-sm font-bold">
              Once Approved it will be added!
            </p>
          </div>
        ) : (
          <form
            className="prose mx-auto max-w-5xl py-6 px-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6">
              <input
                {...register('_id')}
                type="hidden"
                name="_id"
                value={post._id}
              />

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                {...register('name', { required: true })}
                type="name"
                id="name"
                name="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="comment"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your Comment
              </label>
              <textarea
                {...register('comment', { required: true })}
                id="comment"
                name="comment"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            {/* Errors for react-hook-form validation */}
            <div className="flex flex-col pb-4">
              {errors.name && (
                <span className="font-semibold text-red-500">
                  Name is Required
                </span>
              )}
              {errors.email && (
                <span className="font-semibold text-red-500">
                  Email is Required
                </span>
              )}
              {errors.comment && (
                <span className="font-semibold text-red-500">
                  Comment is Required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5  py-2.5 text-center text-sm font-medium text-white hover:bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              Submit
            </button>
          </form>
        )}

        <div className='prose mx-auto max-w-5xl px-4 pt-4'>
              {post.comments.map((comment)=>(
                <div key={comment._id}>
                  {comment.comment}
                </div>
              ))}
        </div>


      </main>
      <Footer />
    </React.Fragment>
  )
}

export const getStaticPaths = async () => {
  const query = `
    *[_type == 'post']{
        _id,
        slug{
         current
        }
      } 
    `
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const query = `*[_type == 'post' && slug.current==$slug][0]{
    _id,
    _createdAt,
    title,
    author->{
    name,image
  },
  'comments': *[
    _type=="comment" && post._ref == ^._id
    && approved == true
  ],
    description,
    slug,
   mainImage,
  body
  }`

  const post = await sanityClient.fetch(query, { slug: params?.slug })
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 3600, // SSR renders the page only if the data has changed and then cache it
  }
}

export default Post
