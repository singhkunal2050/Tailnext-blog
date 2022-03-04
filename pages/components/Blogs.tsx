import React from 'react'

function Blogs() {
  console.log()
  return (
    <section className="">
      <div className="mx-auto max-w-5xl py-10">
        <div className="heading pb-7 text-center">
          <h1 className="text-4xl font-extrabold">Blogs</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:px-20">
          <div className="card rounded-sm border-2  shadow-md ">
            <div className="card-img">
              <img
                src="//source.unsplash.com/800x450?tech"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
