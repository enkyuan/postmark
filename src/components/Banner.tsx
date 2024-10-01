import React from 'react'

export const Banner = () => {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-violet-300 via-blue-600 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Understand What You Read.

            <span className="sm:block"> Help Others do the Same. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Postmark is a platform for talking about books and all sorts of written content. It's an open wiki so you know what you're about to read and indexes the most important parts of a text so total recall doesn't mean rereading the whole thing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Start Posting
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>  
  )
}
