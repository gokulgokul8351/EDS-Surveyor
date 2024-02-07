import React, { useState } from 'react'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { MdMarkEmailRead } from 'react-icons/md'

const Success = () => {
  return (
    <section className=" gap-3 w-h-[100vw] h-[100vh] flex flex-col items-center justify-center text-center ">
      <h1 className=" my-8 text-[1.7rem] text-center font-bold ">
        Thank You Reach To EDS Land Surveyors
      </h1>
      <p className=" font-light text-[1.2rem] ">
        We have received your request and will get back to you soon EDS team.{' '}
      </p>
      <address>Magudanchavadi,Sangiri(Tk),Salem(Dt),Salem 637 103.</address>
      <div className=" text-center ">
        {/* contact div st */}

        <div>
          <div className="flex  gap-3 text-xl ">
            <div className="flex gap-2 items-center ">
              <MdOutlineWifiCalling3 className=" text-pink-600 text-2xl  " />
              <a href="">+91 96298 38220</a>
            </div>
            <div>|</div>
            <div className="flex items-center gap-2">
              <MdOutlineWifiCalling3 className="text-green-600 text-2xl" />
              <a href="">+91 86080 65978</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center text-xl my-3 ">
          <span className=" text-blue-600 text-2xl ">
            <MdMarkEmailRead />
          </span>
          <a
            href=""
            className=" text-purple-600 "
          >
            edslandsurveyor@gmail.com
          </a>
        </div>

        {/* contact div end */}
      </div>
      <a href="/">
        <button className=" bg-pink-600 hover:bg-transparent hover:border-[2px] hover:border-pink-600 hover:text-black px-10 py-2 text-white text-xl rounded ">
          Home
        </button>
      </a>
    </section>
  )
}

export default Success
