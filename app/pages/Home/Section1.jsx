import React from 'react'
import Slider from './Slider'
import Button from "./Button"

const Section1 = () => {

  return (
    <div className="sec-1 relative">
         <Slider />
         <div className='btn-find  absolute z-10 text-center gap-5 flex flex-col  items-center'>
             <h2 className='font-bold  uppercase text-white text-lg lg:text-3xl '>Find Your Dream Property</h2>
             <Button />
         </div>
    </div>
  )
}

export default Section1