import React from "react";
import Logo from "./assets/Logo.png"
export default function Navbar(){
    
  return (
    <nav className="sticky top-0  z-10 ">
      <div className="flex justify-between items-center">
        <a href="/">
          {" "}
          <img
            src={Logo}
            className=" w-50 ml-20 opacity-55 transform transition-transform duration-500 ease-in-out hover:rotate-360"
            alt="mylogo"
          />
        </a>

        <div className="flex ">
          <a
            href="/"
            className="mr-20 hover:text-gray-600 transition"
          >
            about him
          </a>
        </div>
      </div>
    </nav>
  );
};

