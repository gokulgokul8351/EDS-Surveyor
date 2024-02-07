import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Media = ({ media }) => {
  return (
    <div className="">
      <h1 className="mb-1 text-2xl font-semibold py-4 ">
        <span className=" text-4xl text-teal-500 ">F</span>
        <span className="border-b-[2px] border-b-teal-500 ">ollowes</span>
      </h1>
      {/* {media.map((d, idx) => (
        <div
          key={idx}
          className=""
        >
          <a href={d.link}>
            <BsWhatsapp className=" edit " />
          </a>
        </div>
      ))} */}
      <div className=" flex gap-3 ">
        <BsWhatsapp className=" W-[300PX] text-5xl bg-green-600 hover:bg-green-800 rounded-xl p-2 " />
        <FaInstagram className=" W-[300PX] text-5xl bg-pink-600 hover:bg-pink-800 rounded-xl p-2 " />
        <FaFacebook className=" W-[300PX] text-5xl bg-blue-600 hover:bg-blue-800 rounded-xl p-2 " />
      </div>
    </div>
  )
}

export default Media
