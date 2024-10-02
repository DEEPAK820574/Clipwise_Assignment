import React from "react";
import Navbar from "../Components/HomeComponent/HeaderComponent/Navbar";
import HeadLogo from "../Components/HomeComponent/HeaderComponent/HeadLogo";
import CartLogo from "../Components/HomeComponent/HeaderComponent/CartLogo";
import HomeDetails from "../Components/HomeComponent/LeftHomeComponent/HomeDetails";
import HomeCardContainer from "../Components/HomeComponent/RightHomeComponent/HomeCardContainer";
import StepIndicator from "../Components/HomeComponent/StepIndicator";

const Home = () => {
  return (
    <>
      <div
        className="max-w-[1440px] h-[900px] "
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/homeBG.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full border-3 ">
          <HeadLogo />
          <Navbar />
          <CartLogo />
          <HomeDetails />
          <HomeCardContainer />
          <StepIndicator />
          {/*  */}
          <div className="absolute w-[121px] h-[38px] top-[812px] left-[659px] z-10 flex justify-between items-center ">
            <img
              className="w-[28px] h-[38px]"
              src={`${process.env.PUBLIC_URL}/assets/mouse.png`}
              alt="bottom"
            />
            <span className="font-sans text-[16px] font-medium leading-[24px] text-[#317189]">
              sroll down
            </span>
          </div>
        </div>
        <div class="absolute w-[1440px] h-[603.5px] top-[296.5px] ">
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/assets/homebottombg.png`}
            alt="bottom"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
