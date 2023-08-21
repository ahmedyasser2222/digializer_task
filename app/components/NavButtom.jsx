import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPencilSquare, BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import ButtonSearchMobile from "./ButtonSearchMobile"

const NavButtom = () => {
  return (
    <div className="flex md:hidden justify-evenly fixed bottom-0 left-0 w-full  bg-white border z-20">
      <ButtonSearchMobile />
      {/* <button className='border w-2/5 btn-nav-get' >
               Search
          </button> */}
      <div className="flex justify-between w-1/2">
        <button className="w-1/4">
          <BsPencilSquare size={45} className="w-full text-white py-2 icon-pencil" />
        </button>
        <button className="w-1/4">
          <AiOutlinePhone size={45} className="w-full text-white py-2 icon-phone" />
        </button>
        <button className="w-1/4">
          <BsWhatsapp size={45} className="w-full text-white  py-2 icon-whats" />
        </button>
        <button className="w-1/4">
          <FaTelegramPlane size={45} className="w-full text-white py-2 icon-telegeam" />
        </button>
      </div>
    </div>
  );
};

export default NavButtom;
