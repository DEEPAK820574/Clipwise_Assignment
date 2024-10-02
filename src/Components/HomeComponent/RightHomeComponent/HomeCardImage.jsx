import React from 'react'

const HomeCardImage = () => {
  return (
    <div>
         <img
            className="w-[362px] h-[362px]"
            src={`${process.env.PUBLIC_URL}/assets/productimage.png`}
            alt="HomeImage"
          />
    </div>
  )
}

export default HomeCardImage