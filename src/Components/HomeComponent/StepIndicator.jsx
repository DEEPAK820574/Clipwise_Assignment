import React, { useState } from "react";

const StepIndicator = ({ totalSteps = 7 }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrevious = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(totalSteps - 1, prev + 1));
  };

  return (
    <div className=" absolute w-[254px] h-[24px] top-[762px] left-[978px] flex items-center justify-between space-x-4 z-10">
      <button onClick={handlePrevious} disabled={activeStep === 0}>
        <img
          className="h-[24px]"
          src={`${process.env.PUBLIC_URL}/assets/LeftArrow.png`}
          alt="LeftArrow"
        />
      </button>

      <div className="flex w-[158px] justify-between ">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`w-[14px] h-[14px] rounded-full ${
              index <= activeStep ? "bg-[#8A93E5]" : "bg-[#D7DBFF]"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={activeStep === totalSteps - 1}
        className=" disabled:opacity-50"
      >
        <img
          className="h-[24px]"
          src={`${process.env.PUBLIC_URL}/assets/RightArrow.png`}
          alt="RightArrow"
        />
      </button>
    </div>
  );
};

export default StepIndicator;
