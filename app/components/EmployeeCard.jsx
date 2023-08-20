import Image from 'next/image'
import React from 'react'

const EmployeeCard = ({img,name,desc}) => {
  return (
    <div className='e-card shadow-md'>
         <div className="div-img overflow-hidden ">
              <Image
                src={img}
                fill
                alt=''
               />
         </div>
         <div className="detail py-10 px-3 text-center">
             <h5 className='text-xl'>{name}</h5>
             <small>{desc}</small>
         </div>
    </div>
  )
}

export default EmployeeCard