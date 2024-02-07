import React from 'react'
import BlogCard from './card/BlogCard'

const Blogs = () => {
  return (
    <section
      id="blogs"
      className=" w-full h-[60%] py-5 mx-4 mt-6 mr-4 border-[2px] flex justify-center items-center "
    >
      {/* blog */}

      <div className=" py-2 text-center ">
        <div className=" px-auto max-[500px]:max-w-7xl max-sm:max-w-xl max-sm:max-h-[50%] max-md:max-w-3xl max-lg:max-w-4xl max-xl:max-w-5xl max-w-7xl  ">
          <h1 className=" text-2xl font-semibold  ">Blogs</h1>

          {/* content blogs gird st */}

          <BlogCard />

          {/* content blogs gird end */}
        </div>
      </div>
    </section>
  )
}

export default Blogs
