import React from "react";

const Navbar = () => {
  return (
    <div class="absolute top-[50px] left-[821px]">
      <ul className="flex  items-center w-[338px] h-[30px]  justify-between font-sans text-[16px] font-medium leading-[30px] text-left text-[#FFFFFF]">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#help">Help</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
