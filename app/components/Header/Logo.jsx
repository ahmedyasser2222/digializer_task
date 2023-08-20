"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter()

  return (
    <Image
      alt="Logo"
      className="cursor-pointer   py-5 lg:py-0"
      height="180"
      width="180"
      src="http://realestate.digializer.com/themes/estate/images/roofsnroots-herizontal-logo.svg"
      onClick={() => router.push('/')}
    />
  );
};

export default Logo;
