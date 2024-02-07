import React, { useState } from 'react'
import Logo from './Logo'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const TopNavbar = () => {
  const [open, setOpen] = useState(false)

  let Links = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/service' },
    { name: ' About', path: '/about' },
    { name: ' Blogs', path: '/blogs' },
    { name: ' Contact', path: '/contact' },
  ]

  return (
    <header
      className=" shadow-md w-[100vw] fixed top-0 left-0 mx-6 my-2"
      style={{ borderBottom: '2px solid gray  ' }}
    >
      <div className=" md:flex items-center justify-between bg-white/80 py4 md:px-10 px-7 md:py-6 py-5  ">
        <div className=" cursor-pointer flex items-center ">
          <Logo />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 mr-8 top-6 cursor-pointer md:hidden "
        >
          {open ? (
            <GrClose />
          ) : (
            <GiHamburgerMenu style={{ fontSize: '2.3rem' }} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
            open
              ? 'top-20 opacity-100 '
              : 'top-[-400px] md:opacity-100 opacity-0 '
          } `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className=" md:ml-8 text-xl md:my-0 my-7 items-center justify-center  hover:border-b-2 hover:border-b-blue-500 transition duration-600 ease-in-out "
            >
              <a
                href={link.path}
                className=" text-gray-800 hover:text-gray-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className=" bg-pink-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-transparent hover:border-[2px] hover:border-pink-500 duration-500 hover:text-black ">
            Let's Talk
          </button>
        </ul>
      </div>
    </header>
  )
}

export default TopNavbar
