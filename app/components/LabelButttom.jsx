import React from "react";

const LabelButttom = () => {
  return (
    <div className="hidden md:flex justify-center items-center m-auto fixed bottom-3 left-0 w-full  uppercase  z-20">
       <div className="flex flex-col items-center bg-white py-1 px-5  shadow-md">
           <small className="text-xsm">We Are Here to Help</small>
           <strong className="text-sm">Ask Roofs & Roots</strong>
       </div>
       <div className="lebel-buttom-num flex flex-col items-center text-white py-1 px-5   shadow-md">
           <small className="text-xsm">Call or WhatsApp</small>
           <strong className="text-sm">+971501983305</strong>
       </div>
    </div>
  );
};

export default LabelButttom;
