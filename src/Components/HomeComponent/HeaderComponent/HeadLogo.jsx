import React from "react";

const HeadLogo = () => {
  return (
    <>
      <div class=" absolute top-[30px] left-[50px] w-[199px] h-[64px]  gap-0 flex justify-between pr-1 ">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Nav_icon.png`}
          alt="BrandLogo"
        />
        <span class="font-sans text-[20px] flex items-center font-normal leading-[26px] text-[#FFFFFF] ">
          Pop Rock Crystal
        </span>
      </div>
    </>
  );
};

export default HeadLogo;
