import React from 'react'

const HeadSection = ({text}) => {
  return (
    <div className="head-section py-10 flex flex-col justify-center items-center gap-4 ">
          <h2>{text}</h2>
          <div className="line"></div>
    </div>
  )
}

export default HeadSection