"use client";

import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div className="hidden lg:block">
       <div className="flex justify-between items-center gap-4 " >
      <Link href="/" className="p-5l link" >Buy</Link>
      <Link href="/" className="p-5l link" >Rent</Link>
      <Link href="/" className="p-5l link" >Off Plan</Link>
      <Link href="/" className="p-5l link" >Our Story</Link>
      <Link href="/" className="p-5l link" >Contact Us</Link>
    </div>
    </div>
  );
};

export default Links;
