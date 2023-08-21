import Image from 'next/image'
import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { FaBed } from 'react-icons/fa'
import { BiBath, BiCube } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

const DetailInfo = ({text,Icon}) => (
    <div className="flex flex-col justify-between items-center">
        <Icon size={20} className="card-icon"/>
        <span className="text-xs mt-1 text-icon">{text}</span>
    </div>
)

const ProductCard = () => {
  return (
    <div className="product-card shadow-xl  my-3 mx-3">
           <div className="div-img">
               <Image
                 src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9hYmNkMDYyMjhmZWIzMzkzMzA2ZmYwNDUwNTA5YTEwYi5qcGVn/exact/webp/2000/1125"
                 alt=''
                 fill
                 className='z-0'
               />
               <div className="counter flex flex-row items-center gap-1 py-1 px-2 pointer-events-none">
                   <AiOutlineCamera size={16} />
                   <span>24 PHOTOS</span>
               </div>
               <div className="date absolute bottom-0 left-0 w-max h-max py-1 px-1">
                  <strong>Open House: </strong>
                  <span>Sat 08/19,  12:00 am - 4:00 pm</span>
               </div>
           </div>
           <div className="details py-4 px-6">
                 <div className="d1 flex justify-between items-center">
                      <div className="w-40">
                          <p className="font-bold leading-8 text-lg">997 W. 1550 S</p>
                          <p className="p2 text-sm" >Clearfield</p>
                          <p className="p2 text-sm" >Lot: 104</p>
                      </div>
                      <div className="w-40 flex justify-end items-center gap-2">
                          {/*  <Image 
                             src="https://www.destinationhomes.com/images/icon-directions.svg"
                             alt=''
                             width={20}
                             height={20}
                           /> */}
                           <p className="p-price">
                              <span>$534,900</span>
                           </p>
                      </div>
                 </div>
                 <hr  className="my-3" />
                 <div className="d2 flex flex-col justify-start ">
                      <p>Wilcox Farms</p>
                      <p>Middleton</p>
                 </div>
                 <hr  className="my-3" />
                 <div className="d3 flex justify-between items-center">
                     <div className="flex justify-between items-center gap-3">
                         <DetailInfo text="3 Beds" Icon={FaBed}/>
                         <DetailInfo text="2.5 Baths" Icon={BiBath}/>
                         <DetailInfo text="2,255 SQ FT" Icon={BiCube}/>
                     </div>
                     <div>
                          <div className="card-continue flex justify-center items-center text-white">
                                <BsArrowRight  size={18}/>
                          </div>
                     </div>
                </div>
           </div>
    </div>
  )
}

export default ProductCard