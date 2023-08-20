import Image from 'next/image'
import React from 'react'

const PhotoCard = ({img,text}) => {
  return (
    <div className='photo-card relative flex justify-center items-center'>
          <Image 
            src={img}
            alt=""
            fill
          />
          <span className='z-20 text-white font-bold text-2xl' >{text}</span>
    </div>
  )
}

export default PhotoCard