import React from "react";

const PriceImageComponent = () => {
  return (
    <div className=" absolute -top-2 left-[725px] w-[770px] h-[770px] rounded-full  flex justify-center items-center bg-white bg-opacity-20 ">
      <div className=" w-[570px] h-[570px] rounded-full shadow-[0px_4px_50px_0px_#788F9C40] flex justify-center items-center bg-white">
        <div className="w-[364px] h-[364px] rounded-full shadow-[0px_4px_50px_0px_#788F9C40] flex justify-center items-center bg-white">
          <img
            className="w-[248px] h-[248px]"
            src={`${process.env.PUBLIC_URL}/assets/productimage.png`}
            alt="description"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceImageComponent;
