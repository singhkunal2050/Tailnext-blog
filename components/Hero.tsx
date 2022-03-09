import React from 'react'
import logo from './../assets/img/logo-big.png'
import Link from 'next/link'

function Hero() {
  return (
    <section className="hero bg-blue-200 py-8">
      <div className="mx-auto grid min-h-[60vh] max-w-5xl grid-cols-1 items-center gap-10 py-10 px-4 md:grid-cols-2 md:px-20">
        <div className="">
          <h1 className="font-serif text-4xl font-extralight lg:text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h1>
          <p>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </p>
          <div className="mt-2 inline-block rounded-3xl border border-black bg-white py-1 px-3">
            <Link href={'/'}> Start Writing</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={logo.src} className="max-w-[60%] md:max-w-[90%]" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
