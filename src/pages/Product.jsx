import React from "react";
import ProductCard from "../Components/ProductComponent/ProductCard";
import FilterDropdown from "../Components/ProductComponent/FilterDropdown";
import SortDropdown from "../Components/ProductComponent/SortDropdown";

const Product = () => {
  return (
    <div className="absolute w-[1440px] h-[1186px] top-[900px] flex justify-center bg-white z-10">
      <h2 className=" absolute top-[50px] font-sans text-[46px] font-bold leading-[50px] text-center text-[#31546D] ">
        All product
      </h2>
      <span className=" absolute  top-[116px] w-[58px] h-[4px] rounded-[24px] bg-[#F2F2F2] "></span>
      <FilterDropdown />
      <SortDropdown />
      <div className="absolute top-[230px]  w-[1340px] h-[854px] left-[50px] flex flex-wrap justify-between ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-[134px] h-[48px] absolute top-[1138px] bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] rounded-[18px] p-[3px]">
        <button className="w-full h-full bg-white rounded-[15px] ">
          <span className="w-auto  h-[24px] absolute inset-0 m-auto  font-sans text-[14px] font-bold leading-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF]">
            View All
          </span>
        </button>
      </div>
    </div>
  );
};

export default Product;
