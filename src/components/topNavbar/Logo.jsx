import React from 'react'
import logoImg from '../../assets/logo1.png'
import logoTxt from '../../assets/txt.png'

const Logo = () => {
  return (
    <div className=" ml-14 logo w-[14rem] h-16 flex">
      <img
        className=" rounded-[50%] h-[5rem] w-[16rem] "
        src={logoImg}
        alt="logo"
      />
      <img
        className=" ml-[-10px] mt-[-10px] "
        style={{ width: '22rem', height: '5.5rem' }}
        src={logoTxt}
        alt="logo"
      />
    </div>
  )
}

export default Logo
