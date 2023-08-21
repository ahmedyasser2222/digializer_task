"use client";

import React from "react";
import useSearchMoel from "../hooks/useSearchModal";

const ButtonSearchMobile = () => {
  const searchModel = useSearchMoel();

  return (
    <button
      className="border w-1/2 "
      onClick={() => {
        searchModel.onOpen();
      }}
    >
      Search
    </button>
  );
};

export default ButtonSearchMobile;
