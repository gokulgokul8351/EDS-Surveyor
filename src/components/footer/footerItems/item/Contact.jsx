import React from 'react'

const Contact = ({ office }) => {
  return (
    <div className="">
      <h1 className="mb-1 text-2xl font-semibold py-4 ">
        <span className="text-pink-600 text-4xl ">H</span>
        <span className=" text-white border-b-[2px] border-b-pink-600 ">
          ead Office
        </span>{' '}
      </h1>
      {office.map((d, idx) => (
        <div
          key={idx}
          className=""
        >
          <address>{d.address}</address>
          <a
            className=" text-pink-500 hover:text-pink-700 "
            href=""
          >
            {d.contact1}
          </a>
          <a
            className=" text-pink-500  hover:text-pink-700"
            href=""
          >
            {d.contact2}
          </a>
          <a
            className=" text-teal-500 hover:text-teal-700 "
            href=""
          >
            {d.email}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Contact
