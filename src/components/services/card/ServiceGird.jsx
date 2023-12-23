import React from 'react'
import { work } from '../../../utils/Constants'

const ServiceGird = () => {
  return (
    <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
      {work.map((val, idx) => (
        <div
          key={idx}
          className="  hover:bg-[#298] group hover:text-white p-4 rounded  "
        >
          <div className=" flex justify-center items-center text-7xl mb-4 text-[#298] group-hover:text-white ">
            <div className=" text-center h-[160px] ">
              <img
                width={val.width}
                src={val.icon}
                alt=""
              />
            </div>
          </div>
          <h3 className=" text-2xl font-bold ">{val.title}</h3>

          <button className=" rounded bg-[#298] group-hover:bg-white group-hover:text-[#298] group-hover:font-medium text-white py-1 px-6 mt-6 ">
            Click me
          </button>
        </div>
      ))}
    </div>
  )
}

export default ServiceGird
