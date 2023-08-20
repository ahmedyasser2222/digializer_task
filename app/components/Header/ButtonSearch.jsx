"use client";

import React from 'react'
import useSearchMoel from "../../hooks/useSearchModal"
import { AiOutlineSearch } from 'react-icons/ai';

const ButtonSearch = () => {
    const searchModel = useSearchMoel()  

  return (
    <button onClick={()=>{ searchModel.onOpen() }} className="btn-icon border-di py-2 px-2 rounded-md  flex justify-between items-center gap-3  hover:shadow-m">
        <AiOutlineSearch className="" />
        <p>Search</p>
      </button>
  )
}

export default ButtonSearch