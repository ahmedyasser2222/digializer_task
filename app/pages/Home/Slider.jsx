"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
  return (
    <Swiper navigation={true} autoplay modules={[Navigation,Autoplay]} className="mySwiper">
    <SwiperSlide>
        <Image
          src="https://469d087300883e9bb3d5-24ea562a81857b1826136658ffdd36e4.ssl.cf3.rackcdn.com/x.prod/1600cm936/images/homepage_banner_investment_hausandhaus_Aug_11.jpg"
          alt=''
          fill
         />
    </SwiperSlide>
    <SwiperSlide>
        <Image
          src="https://469d087300883e9bb3d5-24ea562a81857b1826136658ffdd36e4.ssl.cf3.rackcdn.com/x.prod/1600cm936/images/homepagebanner_choose_properties_july_27.jpg"
          alt=''
          fill
         />
    </SwiperSlide>
    <SwiperSlide>
        <Image
          src="https://469d087300883e9bb3d5-24ea562a81857b1826136658ffdd36e4.ssl.cf3.rackcdn.com/x.prod/1600cm936/images/homepage_banner_100_communites_hausandhaus_Aug_11.jpg"
          alt=''
          fill
         />
    </SwiperSlide>
    <SwiperSlide>
        <Image
          src="https://469d087300883e9bb3d5-24ea562a81857b1826136658ffdd36e4.ssl.cf3.rackcdn.com/x.prod/1600cm936/images/homepage_banner_investment_hausandhaus_Aug_11.jpg"
          alt=''
          fill
         />
    </SwiperSlide>
    <SwiperSlide>
        <Image
          src="https://469d087300883e9bb3d5-24ea562a81857b1826136658ffdd36e4.ssl.cf3.rackcdn.com/x.prod/1600cm936/images/homepage_banner_investment_hausandhaus_Aug_11.jpg"
          alt=''
          fill
         />
    </SwiperSlide>
    <SwiperSlide>
        <Image
          src="https://469d087300883e9bb3d5-24ea562a81857b1826136658ffdd36e4.ssl.cf3.rackcdn.com/x.prod/1600cm936/images/homepage_banner_investment_hausandhaus_Aug_11.jpg"
          alt=''
          fill
         />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider