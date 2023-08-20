"use client";

import React , { useState } from "react";

const CycleTabsItem = ({ items }) => {
    const [ tabActive , setTabActive ] = useState(1)
    
    const handelTab = (tabNum) => {
         setTabActive(tabNum)
    }

    return (    
        <div className="cycles-tap-conta">
            <div className="cycles-tap-wrap">
                <div className="taps flex flex-row items-center gap-1 justify-center">
                     <ul className="flex flex-row items-center gap-1 justify-center my-3">
                        {items.map( (item , index) => (
                            <li 
                            className={`${ (item.id === tabActive && "active " ) } btn-tab py-3 px-6  bg-gray-300 text-xl cursor-pointer`} 
                            onClick={ e => handelTab(item.id) } key={index}  >{item.title}</li>
                        ) )}
                     </ul>
                </div>
                <div className="item-contain">
                    {items[tabActive-1].content}
                </div>
            </div>
        </div>
    )
}

export default CycleTabsItem ;