import React from 'react'
import sample from '../../../assets/bg.jpg'

const BlogCard = () => {
  return (
    <div className="   ">
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        {/* grid template st*/}

        <div className=" flex justify-center items-center flex-col gap-4  border-green-500 border-[2px] p-4 ">
          <img
            width={'350px'}
            src={sample}
            alt=""
          />
          <h2 className=" text-3xl ">Road Survey</h2>
          <p className=" text-xl ">Lic Head office Project</p>
          <button className="  bg-orange-500 text-white font-semibold font-sans text-[1.1rem] px-6 py-3 mt-4 rounded-[10px] hover:bg-transparent hover:text-orange-500 hover:border-[2px] hover:border-orange-500 ">
            Read more
          </button>
        </div>

        {/* grid template st*/}

        <div className=" flex justify-center items-center flex-col gap-4  border-green-500 border-[2px] p-4 ">
          <img
            width={'350px'}
            src={sample}
            alt=""
          />
          <h2 className=" text-3xl ">Road Survey</h2>
          <p className=" text-xl ">Lic Head office Project</p>
          <button className="  bg-orange-500 text-white font-semibold font-sans text-[1.1rem] px-6 py-3 mt-4 rounded-[10px] hover:bg-transparent hover:text-orange-500 hover:border-[2px] hover:border-orange-500 ">
            Read more
          </button>
        </div>

        {/* grid template st*/}

        <div className=" flex justify-center items-center flex-col gap-4  border-green-500 border-[2px] p-4 ">
          <img
            width={'350px'}
            src={sample}
            alt=""
          />
          <h2 className=" text-3xl ">Road Survey</h2>
          <p className=" text-xl ">Lic Head office Project</p>
          <button className="  bg-orange-500 text-white font-semibold font-sans text-[1.1rem] px-6 py-3 mt-4 rounded-[10px] hover:bg-transparent hover:text-orange-500 hover:border-[2px] hover:border-orange-500 ">
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
