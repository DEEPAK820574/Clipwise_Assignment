import React from "react";

const ProductButton = () => {
  return (
    <>
      <div className="w-[180px] h-[56px] relative bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] rounded-[18px] p-[3px]">
        <button className="w-full h-full bg-white hover:bg-transparent rounded-[15px] group hover:shadow-custom-button-shadow">
          <span className="w-auto  h-[24px] absolute inset-0 m-auto  font-sans text-[14px] font-bold leading-[24px] text-transparent group-hover:text-[#FFFFFF] bg-clip-text bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]">
            BUY NOW
          </span>
        </button>
      </div>
    </>
  );
};
export default ProductButton;
