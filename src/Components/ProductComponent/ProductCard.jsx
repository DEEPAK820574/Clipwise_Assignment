import React from "react";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import ProductButton from "./ProductButton";

const ProductCard = () => {
  return (
    <div className="w-[322px] h-[412px] flex flex-col  items-center gap-y-8 rounded-[30px] border-2 hover:shadow-custom-hover">
      <ProductImage />
      <ProductDescription />
      <ProductButton />
    </div>
  );
};

export default ProductCard;
