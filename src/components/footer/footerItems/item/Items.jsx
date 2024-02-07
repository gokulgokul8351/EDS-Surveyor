import React from 'react'

const Items = ({ resources, title }) => {
  return (
    <div className=" ml-8 ">
      <h1 className="mb-1 text-2xl font-semibold py-4 ">
        <span className=" text-4xl text-green-600 ">R</span>
        <span className=" border-b-[2px] border-b-green-500 ">
          esources
        </span>{' '}
      </h1>
      {resources.map((d, idx) => (
        <ul key={idx}>
          <li>
            <a
              className=" text-orange-100 hover:text-orange-400 font-serif text-[1rem] "
              href={d.link}
            >
              {d.name}
            </a>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Items
