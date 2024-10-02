import React from "react";

const PriceDetail = () => {
  return (
    <div className="absolute top-[163px] left-[212px] w-[542px] h-[444px] flex flex-col justify-between z-20">
      <h2 className="w-[542px] h-[123px] font-sans text-[40px] font-normal leading-[65px] text-[#31546D] text-right">
        BEST PRICE{" "}
        <div className="font-sans text-[64px] font-bold leading-[40px] text-right">
          Agate Phone Grip
        </div>
      </h2>
      <div className="flex justify-end gap-3 items-center ">
        <span className="w-[77px] h-[30px] font-sans text-[24px] font-normal leading-[30px] text-center text-[#41A0B7] line-through">
          44.50$
        </span>
        <span className="w-[216px] h-[89px] font-sans text-[70px] font-bold leading-[89.04px] text-center text-[#E35B3E]">
          19.50$
        </span>
      </div>

      <div className="w-[400px] h-[96px] flex self-end">
        <span className="font-sans text-[16px] font-normal leading-[24px] text-right text-[#31546D]">
          These Pop Rock Crystal grip tops can be swapped with other tops
          depending on your mood, outfit, nails, phone case, holiday, etc.! Just
          gently squeeze the sides to remove and swap out with another color or
          design!
        </span>
      </div>

      <button className=" w-[180px] h-[56px]  rounded-[18px] font-sans text-[16px] font-bold leading-[24px] text-center text-[#FFFFFF] bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] self-end">
        BUY NOW
      </button>
    </div>
  );
};

export default PriceDetail;
