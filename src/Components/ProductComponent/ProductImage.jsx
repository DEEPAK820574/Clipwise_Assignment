import React from "react";
const ProductImage = () => {
  return (
    <>
      <div className="w-[198px] h-[198px] mt-5 ">
        <img
          src={`${process.env.PUBLIC_URL}/assets/productimage.png`}
          alt="description"
        />
      </div>
    </>
  );
};

export default ProductImage;
