"use client";

import React from 'react'
import Modal from "./model"
import { AiOutlinePlusCircle } from 'react-icons/ai'
import useSearchMoel from "../../hooks/useSearchModal"

const TextSearch = []

const BodyModel = () => (
    <div className='search-model'>
         <p className='font-bold '>Filter Your Search</p>
         <div className="option flex md:justify-center lg:justify-between my-3 flex-wrap gap-4">
         <select name="" id="" className='border  py-2 px-5 focus:outline-none '>
             <option value="">Residential Sale</option>
             <option value="">Commercial Sale</option>
             <option value="">Residential Rent</option>
             <option value="">Commercial Rent</option>
         </select>
         <select name="" id="" className='border  py-2 px-5 focus:outline-none' >
             <option value="">Property Type</option>
             <option value="">Apartment</option>
             <option value="">Duplex</option>
             <option value="">Hotel Apartment</option>
         </select>
         <select name="" id="" className='border  py-2 px-5 focus:outline-none ' >
             <option value="">Any Beds</option>
             <option value="">Studio</option>
             <option value="">1 Bedroom</option>
             <option value="">2 Bedrooms</option>
             <option value="">3 Bedroom</option>
             <option value="">4 Bedrooms</option>
         </select> 
         </div>
         <div className="dev-input-search  my-3 relative">
             <input type="text" placeholder='Search' className='w-full py-3 px-4 border focus:outline-none' />
             <div className="items absolute top-full left-0 bg-white  w-full shadow-md  z-10">
                  <ul>
                      {/* <li className="p-3 cursor-pointer hover:bg-green-100">pppp</li>
                      <li className="p-3 cursor-pointer hover:bg-green-100">pppp</li> */}
                  </ul>
             </div>
         </div>
         <div className="dev-input-search  my-3 relative">
             <button className='btn-search w-full py-2  text-white text-lg'>Search</button>
         </div>
         <br />
         <button className='text-gray-700 flex items-center gap-1'> <AiOutlinePlusCircle /> Advanced Search </button>
    </div>
)

const SearchModel = () => {
  const searchModel = useSearchMoel()  
  return (
    <Modal 
      title="Find Your Dream Property"
      body={<BodyModel />}
      isOpen={searchModel.isOpen}
      onClose={()=>{searchModel.onClose()}}
    />
  )
}

export default SearchModel