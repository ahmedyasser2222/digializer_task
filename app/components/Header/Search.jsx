import React from "react";
import { AiOutlineSearch, AiOutlineCaretDown } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import ButtonSearch from "./ButtonSearch";
import { FaBars } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="block lg:hidden cursor-pointer">
          <FaBars  size={30} />
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center gap-3">
          <ButtonSearch />
          <button className="border-div  flex justify-between items-center gap-3  rounded-m ">
            <GrLanguage size={20} className="" />
            <AiOutlineCaretDown />
          </button>
          <button className="btn-icon list py-2 px-5 tex rounded-md  flex justify-between items-center gap-3  hover:shadow-m">
            <p>Add Listing</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
