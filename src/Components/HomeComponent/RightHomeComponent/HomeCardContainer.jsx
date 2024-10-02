import React from 'react'
import HomeCardImage from './HomeCardImage'

const HomeCardContainer = () => {
  return (
    <div className='absolute top-[173px] left-[821px] w-[569px] h-[554px] rounded-[50px] flex items-center justify-center bg-[#FFFFFF] z-10' style={{ boxShadow: '0px 4px 50px 0px rgba(120, 143, 156, 0.25)' }}>
     <span class="absolute top-20 left-0 w-[97px] h-[40px] bg-[#8A93E5] rounded-r-[8px]   flex  font-sans text-[16px] font-medium leading-[24px] items-center justify-center text-[#FFFFFF]">
     New lot
    </span>

       <div className='w-[362px] h-[454px] flex flex-col justify-between '>
       <HomeCardImage/>
       <span className=' w-[350px] h-[24px] font-sans text-[20px] font-normal leading-[24px] text-center text-gray-500'>
       CRYSTAL AGATE PHONE GRIP <span className='font-bold text-[#317189]'>- 18.99$</span>
       </span>
       </div>
     

    </div>
  )
}

export default HomeCardContainer