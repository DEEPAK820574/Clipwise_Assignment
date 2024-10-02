import React from "react";

const CartLogo = () => {
  return (
    <>
      <div class="absolute top-[50px] left-[1340px] w-[50px] h-[30px] gap-1 flex items-center justify-between">
        <span className=" w-[14px] h-[14px] font-sans text-[8px] font-bold text-[#FFFFFF] bg-[#FF2B77] rounded-full flex items-center justify-center">
          00
        </span>
        <div className="w-[30px] h-[30px]">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Cart.png`}
            alt="BrandLogo"
          />
        </div>
      </div>
    </>
  );
};

export default CartLogo;
