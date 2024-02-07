import React from 'react'
import { reviewDetails as reviewData } from '../../../utils/Constants'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const BlogCard = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className=" lg:w-3/4 h-1/3 m-auto  ">
        <div className=" mt-10 relative -z-10 ">
          <Slider
            {...settings2}
            className={` max-[400px]: ? ${{ ...settings1 }} `}
          >
            {reviewData.map((d) => (
              <div
                key={d.title}
                className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 "
              >
                <div className=" flex justify-center items-center flex-col gap-4  p-4 ">
                  <img
                    width={'300px'}
                    src={d.img}
                    alt=""
                    // className=" blog-img max-sm:w-[200px] w-[300px]  "
                    className="blog-img"
                  />
                  <h2 className=" text-3xl ">{d.title}</h2>
                  <p className=" text-xl ">{d.review}</p>
                  <button className="  bg-orange-500 text-white font-semibold font-sans text-[1.1rem] px-6 py-3 mt-4 rounded-[10px] hover:bg-transparent hover:text-orange-500 hover:border-[2px] hover:border-orange-500 ">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default BlogCard
