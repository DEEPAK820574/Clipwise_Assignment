import React, { useState } from "react";

const FilterDropdown = ({ options = ["All Products"] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-[150px] left-[50px] w-[169px] h-[30px]">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center bg-white hover:bg-gray-50"
        >
          <span className="font-sans text-[16px] font-bold leading-[30px] text-left text-[#9AB0C0]">
            Filter:
          </span>
          <span className="font-sans text-[16px] font-bold leading-[30px]  text-[#31546D] ml-2">
            {selectedOption}
          </span>
          <span className="w-[10px] h-[10px] ml-2">
            <img
              src={`${process.env.PUBLIC_URL}/assets/downArrow.png`}
              alt="downArrow"
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className={`${
                  option === selectedOption
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                } block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick(option);
                }}
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
