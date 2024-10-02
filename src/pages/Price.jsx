import React from "react";
import PriceImageComponent from "../Components/PriceComponent/PriceImageComponent";
import PriceDetail from "../Components/PriceComponent/PriceDetail";

const Price = () => {
  return (
     <div
      class=" absolute top-[2086px] w-[1440px] h-[798px] overflow-hidden "
      style={{
        backgroundImage: `url("/assets/homebg.png")`,
        backgroundSize: "1440px 798px",
        backgroundPosition: "center",
      }}
    >
      <div
        class=" absolute  w-[1440px] h-[798px] z-20  "
        style={{
          backgroundImage: `url("/assets/pricewhiteboard.png")`,
          backgroundSize: "1440px 798px",
          backgroundPosition: "center",
        }}
      >
        <PriceDetail />
        <PriceImageComponent />
      </div>
    </div>
  );
};

export default Price;
