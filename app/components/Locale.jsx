"use client";

import React, { useState } from 'react'

const Locale = ({open}) => {
  const [lang , setLang] = useState(true)
  const [lang2 , setLang2] = useState(true)
  return (
    <div className={`locale absolute top-full left-0 w-max h-auto bg-white p-4 rounded-b-lg  ${open && "hidden"}`} >
          <div className='py-1' onClick={()=> setLang(!lang)}>
               <span className='text-sm' style={{color : "#144273"}}>Language : </span>
               <span className="font-bold text-md" style={{color : "#144273"}}>EN</span>
               <div className={`text-left ${lang && "hidden"}`}>
                  <ul>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                  </ul>
               </div>
          </div>
          <div className='py-1' onClick={()=> setLang2(!lang2)}>
               <span className='text-sm' style={{color : "#144273"}}>Currency : </span>
               <span className="font-bold text-md" style={{color : "#144273"}}>USD</span>
               <div className={`text-left ${lang2 && "hidden"}`}>
                  <ul>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                     <li className='p-1 text-sm' style={{ color : "#7d93b2" }} >EN</li>
                  </ul>
               </div>
          </div>
    </div> 
  )
}

export default Locale;