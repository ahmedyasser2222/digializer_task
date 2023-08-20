import React from "react";
import useSearchMoel from "../../hooks/useSearchModal"

const Button = () => {
    const searchModel = useSearchMoel()  

  return (
    <button
      className="bg-white py-0 px-14 "
      onClick={() => {
        searchModel.onOpen();
      }}
    >
      Find
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Button;
