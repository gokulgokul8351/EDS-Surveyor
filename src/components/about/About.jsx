import React from 'react'
import AboutImg from '../../assets/local/3.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const About = () => {
  const [text] = useTypewriter({
    words: [
      'Land Survey',
      'Road Survey',
      'Topographical Survey',
      'InfraStature Survey',
      'Building Column & Plot Marking',
    ],
    loop: true,
    typeSpeed: 30,
    delaySpeed: 2000,
    deleteSpeed: 30,
  })

  return (
    <section
      id="about"
      className=" my-5 mx-4 border-[2px] border-red-500 "
    >
      <div className="container flex items-center justify-center mx-auto mt-10  md:px-12 sm:flex-row max-sm:flex-col flex-col">
        {/* left side */}

        <div className="w-1/2 flex justify-center items-center mb-4 ">
          <img
            src={AboutImg}
            alt="EDS"
          />
        </div>

        {/* right side */}

        <div className="w-1/2 flex flex-col mb-14 lg:mb-4 lg:w-1/2 gap-4 ">
          <h4 className=" text-[1.5rem] max-[400px]:text-[1.2rem] text-gray-500 ">
            About Us
          </h4>
          <h1 className="text-[1rem] max-sm:text-[2rem] max-[400px]:text-[1rem] ">
            <span className="text-gray-900 text about-txt max-[400px]:text-[1.2rem] text-[2rem] ">
              EDS
            </span>{' '}
            -{' '}
            <span className=" text-pink-600 text-[2rem] max-[400px]:text-[1.2rem] ">
              {text}
            </span>
            <Cursor
              // className="max-[400px]:text-[1.2rem]"
              cursorBlinking="1"
              cursorStyle=" | "
              cursorColor=" #ff014 "
            />
          </h1>
          <h2 className=" text-[1.5rem] max-sm:text-[1.2rem] max-[400px]:text-[1rem] ">
            <span className=" text-[2.5rem] mr-2 text-fuchsia-600 ">
              <Cursor
                cursorBlinking="1"
                cursorStyle="|"
              />
            </span>
            We are having 10+ years experience in surveyor side most valuable at
            right selection me.
          </h2>
          <p className=" text-[0.8rem] max-[400px]:text-[0.7rem]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            perspiciatis veniam praesentium aliquam debitis ea doloremque
            pariatur optio natus dolor incidunt quas fugiat, ipsa veritatis
            aliquid vel alias reprehenderit eaque.
          </p>
          <div className="flex justify-center items-center">
            <button className=" border-[3px] bg-green-500 px-10 py-2 rounded-[8px] text-slate-100 hover:bg-transparent hover:text-black hover:border-green-500 ">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
