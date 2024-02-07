import React from 'react'
import { work } from '../../utils/Constants'
import ServiceGird from './card/ServiceGird'
import WorkFlowGird from './card/WorkFlowGird'

const Services = () => {
  return (
    <>
      <section
        id="services"
        className=" w-full h-[60%] py-5 px-5  border-[2px] flex justify-center items-centermy-5 mx-4 "
      >
        <div className=" py-2 text-center ">
          <div className=" px-auto max-w-7xl mx-6 sm:px-8 md:px-12 ">
            <h1 className=" text-2xl font-semibold md:text-3xl border-b-[2px]  border-b-pink-600 inline-block  ">
              What We Do
            </h1>

            {/* gird */}

            <ServiceGird />

            {/* end gird */}

            {/* start work flow */}

            <WorkFlowGird />

            {/* end wrk flow */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
