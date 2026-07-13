import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_TITLES } from "../../constants/pageTitles";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const location = useLocation();

  const pageTitle = PAGE_TITLES[location.pathname];
  return (
    <>
      <div className="bg-gray-900 w-full h-14 border-1 border-gray-800 flex justify-between text-gray-300 items-center p-4">
        <p>{pageTitle}</p>
        <ProfileDropdown></ProfileDropdown>
      </div>
    </>
  );
};

export default Navbar;
