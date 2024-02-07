import React, { useEffect, useState } from 'react'
import sample1 from '../../assets/eds img/1.jpg'
import sample2 from '../../assets/eds img/2.jpg'
import sample3 from '../../assets/eds img/3.jpg'
import sample4 from '../../assets/eds img/4.jpg'

const Testimonials = () => {
  let [img, setImg] = useState(0)
  let autoImg = [sample1, sample2, sample3, sample4]

  useEffect(() => {
    const interval = setInterval(() => {
      setImg((previousValue) => (previousValue + 1) % autoImg.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoImg.length])

  return (
    <>
      <section
        id="testimonial"
        className="py-5 mx-4 my-8 "
      >
        <div className=" my-6 container flex flex-wrap items-center justify-center mx-auto md:px-12 md:flex-row -mt-10 border-[2px] border-green-600 pb-4 ">
          <div className=" flex justify-center flex-col items-center mb-6 lg:mb-0 lg:w-1/2 ">
            <h1 className=" max-w-xl text-[2.9rem]  max-sm:text-[1.5rem] leading-none text-gray-700 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5 mt-6 max-sm:mt-[4rem] ">
              Providing High Quality & Affordable Services
            </h1>
            <p className="max-w-xl text-gray-500 max-sm:text-[0.8rem] lg:text-left lg:max-w-md ">
              Simply provide your details and one of our engineers or surveyors
              will respond shortly.And your detailed quote will be provided back
              in about a day and offers you and offers you an accurate and firm
              estimate.
            </p>
            <div className="justify-center mt-6 items-center">
              <button className=" rounded-[5px] bg-pink-500 text-lime-50 hover:text-black py-2 px-6 text-center hover:bg-transparent hover:border-[2px] hover:border-pink-500 hover:drop-shadow-md transition duration-200 ease-in-out max-sm:text-[0.7rem] ">
                Let's Talk
              </button>
            </div>
          </div>
          <div
            className="lg:w-1/2 flex justify-center items-center mx-auto my-auto "
            // style={{ border: '4px solid blue' }}
          >
            <img
              id="auto"
              src={autoImg[img]}
              alt={`Image ${img + 1}`}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
