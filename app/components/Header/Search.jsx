"use client";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineCaretDown,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import ButtonSearch from "./ButtonSearch";
import { FaBars } from "react-icons/fa";
import Locale from "../Locale";

const Search = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="bars block lg:hidden cursor-pointer p-2">
        <FaBars size={30} />
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center gap-3">
          <ButtonSearch />
          <div className="relative">
          <button
            className="border-div  flex justify-between items-center gap-3  px-5"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdOutlineLanguage size={22} className="lang-icon " />
            <AiOutlineCaretDown />
          </button>
          <Locale open={open} />
          </div>

          <button className="btn-icon list py-2 px-5 tex rounded-md  flex justify-between items-center gap-3  hover:shadow-m">
            <AiOutlinePlusCircle size={22} className="lang-icon " />
            <p className="text-md">Add Listing</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
