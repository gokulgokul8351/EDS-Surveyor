import React, { useContext, useRef, useState } from 'react'
import logoImg from '../../../../assets/logo1.png'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Brand = ({ brand }) => {
  const form = useRef()
  const navigate = useNavigate()
  const notifySuccess = (msg) => toast.success(msg)

  const [formData, setFormData] = useState({
    user_name: '',
    user_number: '',
    user_email: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear the corresponding error when the user starts typing again
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (formData.user_name.trim() === '') {
      newErrors.name = 'Name is required'
    }

    if (formData.user_number.trim() === '') {
      newErrors.number = 'Number is required'
    }

    if (formData.user_email.trim() === '') {
      newErrors.email = 'Invalid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const emailSend = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Form is valid, proceed with email submission
      emailjs
        .sendForm(
          'service_7ymnzmf',
          'template_80xvk85',
          form.current,
          'ZSb3ZSvzFrKWHEPMN'
        )
        .then(
          (res) => {
            console.log(res.text)
            notifySuccess('Successfully Send it!')

            setTimeout(() => {
              navigate('/success')
            }, 2000) // Navigate to '/success' component on success
          },
          (error) => {
            console.log(error.text)
          }
        )
    } else {
      // Form is invalid, do not proceed with submission
      console.log('Form validation failed')
    }
  }

  return (
    <div>
      {brand.map((d, idx) => (
        <div key={idx}>
          <div
            key={idx}
            className=" cursor-pointer "
          >
            <div className=" logo w-[10rem] h-16 flex">
              <img
                className=" rounded-[100%] h-[4rem] w-[6rem] "
                src={logoImg}
                alt="logo"
              />
              <div className=" flex gap-1 ml-2 mt-3 ">
                <span className=" text-2xl font-semibold text-amber-500 ">
                  EDS{' '}
                </span>
                <span className=" -ml-6 mt-6 flex items-center text-xl font-semibold  text-teal-500  ">
                  Land
                </span>{' '}
                <span className=" mt-6 ml-1 flex items-center text-xl font-semibold  text-pink-500  ">
                  Surveyors
                </span>
              </div>
            </div>
            <h1 className="mb-1 text-2xl font-semibold py-4 border-b-blue-400 border-b-[2PX]   "></h1>
          </div>
          <p>{d.content}</p>
        </div>
      ))}
      <div className="">
        <form
          ref={form}
          onSubmit={emailSend}
        >
          <div className=" flex flex-col mt-4 ">
            <div className="">
              {' '}
              <input
                className=" w-full outline-none border-[1px] py-2 bg-slate-100 text-center border-slate-400 text-pink-600 placeholder:text-slate-700 "
                type="text"
                placeholder="Name"
                value={formData.user_name}
                onChange={(e) => handleChange(e)}
                name="user_name"
                required
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="">
              {' '}
              <input
                className=" w-full outline-none border-[1px] py-2 bg-slate-100 text-center border-slate-400 text-pink-600 placeholder:text-slate-700 "
                type="tel"
                placeholder="Ph.Number"
                name="user_number"
                value={formData.user_number}
                onChange={(e) => handleChange(e)}
                required
              />
              {errors.number && <p className="text-red-500">{errors.number}</p>}
            </div>

            <div className="">
              <input
                className=" w-full outline-none border-[1px] py-2 bg-slate-100 text-center border-slate-400 text-pink-600 placeholder:text-slate-700 "
                type="text"
                placeholder="Your@gmail.com"
                name="user_email"
                value={formData.user_email}
                onChange={(e) => handleChange(e)}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className=" flex justify-center items-center ">
              <button
                type="submit"
                value="send"
                className=" bg-teal-500 hover:bg-teal-800 py-2 w-full "
              >
                Get in Touch
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Brand
