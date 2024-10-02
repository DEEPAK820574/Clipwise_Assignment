import React from "react";

const HomeDetails = () => {
  return (
    <div className=" absolute top-[244px] left-[50px] h-[400px] flex flex-col justify-around">
      <h2 className="w-[707px] h-[123px] font-sans text-[40px] font-normal leading-[65px] text-[#FFFFFF] text-left">
        Welcome to
        <div className="font-sans text-[64px] font-bold leading-[65px] text-left">
          Pop Rock Crystal Shop!
        </div>
      </h2>
      {/*  */}
      <div className="w-[400px] h-[72px] font-sans text-[16px] font-normal leading-[24px] text-left text-[#31546D]">
        <p>
          Here you will find unique phone accessories, crystals, jewelry and
          more. Free shipping inside the U.S. and our phone grips come with a
          limited warranty. Enjoy!
        </p>
      </div>
      {/*  */}
      <div className="w-[283px] h-[56px] flex justify-between items-center">
        <button className="w-[180px] h-[56px] gap-0 rounded-[18px] bg-gradient-to-r from-[#FFFFFF] to-[#F1FAFF] font-sans text-[16px] font-bold leading-[24px] text-center text-[#317189]">
          SHOP NOW
        </button>
        <button className=" w-[63px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left text-[#317189]">
          about us
        </button>
      </div>
    </div>
  );
};

export default HomeDetails;
