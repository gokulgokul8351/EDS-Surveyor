import React from 'react'
import './../Services.css'
import { workFlowChat as chat } from '../../../utils/Constants'

const WorkFlowGird = () => {
  return (
    <div className=" mt-8 text-center border-t-[2px] border-t-slate-300 ">
      <div className=" px-auto max-w-7xl mx-6 sm:px-8 md:px-12 ">
        <h1 className=" text-2xl font-extrabold md:text-4xl text-slate-800 my-6 ">
          Work Flow
        </h1>

        <div className=" relative -z-30 ">
          <div className=" flex justify-center rotate-[270deg] scale-50  p-0 m-[-152px] ml-[-510px] ">
            <div className="loaders">
              <div className="loaders-circle"></div>
              <div className="loaders-circle"></div>
              <div className="loaders-circle"></div>
              <div className="loaders-circle"></div>
            </div>
          </div>
          <div className=" flex justify-center rotate-[270deg] scale-50  p-0 mt-[-220px] ml-[348px] ">
            <div className="loaders">
              <div className="loaders-circle"></div>
              <div className="loaders-circle"></div>
              <div className="loaders-circle"></div>
              <div className="loaders-circle"></div>
            </div>
          </div>
        </div>

        {/* gird */}

        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {chat.map((chat, index) => (
            <div
              key={index}
              className=" flex  max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:mb-8 "
            >
              <div className="  flex justify-center flex-col items-center gap-4 px-4 py-4 ">
                <div
                  className={`flex justify-center items-center text-white  w-[40px] h-[40px] text-center rounded-[50%]`}
                >
                  <span>
                    <div className="loader mb-8 relative -z-30">
                      <span className=" text-black "></span>
                    </div>
                  </span>
                </div>
                <h3 className=" text-2xl ">{chat.title}</h3>
                <p>{chat.content}</p>
              </div>
              <div className=" flex text-5xl text-pink-600 items-center max-sm:rotate-90 ">
                {chat.arrow}
              </div>
              <span className=" flex justify-center items-center text-7xl text-[#298] ">
                {chat.heart}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkFlowGird
