import React from 'react'
import FooterItems from './footerItems/FooterItems'

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" bg-gray-900 text-white  "
    >
      {/* contact form */}
      <div className=" md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7  ">
        <h1 className=" lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ">
          <span className=" text-teal-400 ">Free</span> untill you're ready to
          reach EDS team.
        </h1>
        <div className="">
          <input
            type="text"
            placeholder=" Enter your ph.no "
            className=" text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "
          />
          <button className=" bg-teal-500 hover:bg-teal-700 duration-300 px-5 py-2.5 rounded-md text-white font-[poppins] md:w-auto w-full ">
            Request call
          </button>
        </div>
      </div>

      {/* footer content */}
      <FooterItems />
    </footer>
  )
}

export default Footer
