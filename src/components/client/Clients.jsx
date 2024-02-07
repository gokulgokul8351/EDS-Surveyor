import React from 'react'
import { clientsData as data } from '../../utils/Constants'
import Slider from 'react-slick'

const Clients = () => {
  const dataSettings = {
    Infinity: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoPlay: 1000,
  }

  return (
    <section id=" clients ">
      <div className=" mt-8 text-center  ">
        <Slider {...dataSettings}>
          {data.map((d) => (
            <div
              key={d.id}
              className=" flex justify-center items-center "
            >
              <img
                width={'100px'}
                height={'100px'}
                src={d.img}
                alt="  "
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Clients
