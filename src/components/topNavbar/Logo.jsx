import React from 'react'
import logoImg from '../../assets/logo1.png'
import logoTxt from '../../assets/txt.png'

const Logo = () => {
  return (
    <div className=" ml-14 logo w-[14rem] max-[400px]:w-[4rem] max-sm:ml-3 h-16 flex ">
      <img
        className=" rounded-[50%] h-[5rem] w-[16rem] max-sm:h-[2rem] max-sm:w-[4rem] "
        src={logoImg}
        alt="logo"
      />
      <img
        className=" ml-[-10px] mt-[-10px] w-[22rem] h-[5.5rem] max-sm:w-[5rem] max-sm:h-[5rem] "
        src={logoTxt}
        alt="logo"
      />
    </div>
  )
}

export default Logo
