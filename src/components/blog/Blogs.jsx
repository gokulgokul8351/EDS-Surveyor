import React from 'react'
import BlogCard from './card/BlogCard'

const Blogs = () => {
  return (
    <section
      id="blogs"
      className=" w-full h-[60%] py-5 mx-4 mt-6 mr-4 border-[2px] border-red-500 flex justify-center items-center  "
    >
      {/* blog */}

      <div className=" py-2 text-center ">
        <div className=" px-auto max-w-7xl mx-6  ">
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
