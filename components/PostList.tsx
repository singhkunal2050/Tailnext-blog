import Link from 'next/link'
import React from 'react'
import { sanityClient, urlFor } from '../sanity.js'
import { Post } from '../typings-d'

interface Props {
  posts: Post[]
}


function PostList({posts}: Props) {
  return (
    <section className="blogs">
        <div className="mx-auto max-w-5xl py-10">
          <div className="heading pb-7 text-center">
            <h1 className="text-4xl font-extrabold">Posts</h1>
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
  )
}

export default PostList