import React from 'react'
// import HeroImg from '../../assets/local/6.png'
// import HeroImg from '../../assets/local/sur0.jpg'
import HeroImg from '../../assets/local/sur13.jpg'
// import HeroImg from '../../assets/bgimg/planingnew.png'

const Home = () => {
  return (
    <section
      // style={{ border: '4px solid lightgreen' }}
      id="home"
      className="py-5 mt-[10%] mx-4 border-[2px] border-green-600 my-8 "
    >
      <div className=" container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row ">
        <div
          className=" flex justify-center flex-col items-center mb-14 lg:mb-0 lg:w-1/2 "
          // style={{ border: '4px solid red' }}
        >
          <h1 className=" max-w-xl text-[2.9rem] leading-none text-gray-700 font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5 mt-[-2rem] max-sm:mt-[4rem] ">
            Land Surveyor
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            quisquam nulla, magnam enim dolor tenetur accusamus consequatur.
            Accusantium deserunt facilis tenetur molestiae consequuntur animi
            aut nulla, autem assumenda officiis ipsum.
          </p>
          <div className="justify-center mt-14 items-center">
            <button className=" rounded-3xl bg-yellow-300 py-2 px-6 text-center hover:bg-transparent hover:border-[2px] hover:border-yellow-300 hover:drop-shadow-md transition duration-200 ease-in-out">
              Let's Talk
            </button>
          </div>
        </div>
        <div
          className="lg:w-1/2 "
          // style={{ border: '4px solid blue' }}
        >
          <img
            width={'500px'}
            src={HeroImg}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
