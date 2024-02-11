import React from "react";
import logo from "../../assets/logo.png";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Darkmode from "./Darkmode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-color:900 dark:text-white duration-200 relative z-40">
      {/* upper */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold  text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="" className="w-10" />
              Moon Shine Apparel
            </a>
          </div>
          {/* serach */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px]  group-hover:w-[300px] transistion-all duration-300 
                        rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary
                        dark:border-gray-800"
              />
              <BsFillSearchHeartFill className="text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 " />
            </div>
            {/* </div> */}
            {/* order */}

            <button
              onClick={() => alert("Megha")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 
        text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block  hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <div>
              <Darkmode />
            </div>
            {/* darkmode
             */}
          </div>
        </div>
      </div>
      {/* lower */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-primary"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            <div className="absolute z=[9999] hidden group-hover:block w-[180px] rounded-md p-2 bg-white text-black shadow-md">
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="hover:bg-primary/20 rounded-md  inline-block w-full p-2"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
