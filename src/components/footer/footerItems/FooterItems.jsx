import React from 'react'
import Brand from './item/Brand'
import Items from './item/Items'
import Media from './item/Media'
import Contact from './item/Contact'
import { BRAND, RESOURCES, MEDIA, OFFICE } from '../../../utils/Constants'

const FooterItems = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className=" mx-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 ">
        <Brand brand={BRAND} />
        <Items
          resources={RESOURCES}
          title="Resources"
        />
        <Contact
          office={OFFICE}
          title1="Head"
          title2="Office"
        />
        <Media media={MEDIA} />
      </div>
      <div className=" text-center mb-8 ">
        &copy;2024 All rights.EDS Land Surveyors. | Website | E-Commerce |
        LandingPage :{' '}
        <span className=" text-pink-600 hover:text-teal-600 ">
          <a href="gokulgokul8351@gmail.com">gokulgokul8351@gmail.com</a>
        </span>
      </div>
    </div>
  )
}

export default FooterItems
