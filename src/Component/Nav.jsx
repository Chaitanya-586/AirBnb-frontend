import React, { useState, useContext } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu, GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthDataContext.jsx";

function Nav() {
  const [showpopup, setShowpopup] = useState(false);
  const { userData, setUserData, serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post(
        `${serverUrl}api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUserData(null);
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[50]">
      {/* Top Navbar */}
      <div className="w-full max-w-screen-xl mx-auto min-h-[80px] px-4 md:px-8 flex flex-wrap items-center justify-between border-b border-[#dcdcdc] gap-y-4 py-2">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-[100px] md:w-[130px]" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-[2px] w-full sm:w-[60%] max-w-[500px] flex-grow">
          <input
            type="text"
            className="flex-grow px-[35px] py-[12px] border border-[#bdbaba] rounded-full outline-none text-[16px] md:text-[18px]"
            placeholder="    Anywhere    |         Any Location     |         Any City"
          />
          <button className="p-[3px] md:p-[16px] bg-[red] rounded-full border-none">
            <FiSearch className="text-[white] w-[30px] h-[25px]" />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-[10px] md:gap-4 relative mr-[2.5rem]">
          <span
            className="hidden md:inline-block text-[15px] md:text-[18px] text-black cursor-pointer
           hover:bg-red-500 hover:text-white px-[14px] py-[12px] rounded-full transition"
            onClick={() => navigate("/ListingPage1")}
          >
            List your home
          </span>

          <button
            className="flex items-center gap-[5px] px-[15px] py-[10px] border border-[#8d8c8c] rounded-full 
            cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setShowpopup((prev) => !prev)}
          >
            <GiHamburgerMenu className="w-[20px] h-[20px]" />
            {!userData ? (
              <CgProfile className="w-[20px] h-[20px]" />
            ) : (
              <div className="w-[30px] h-[30px] bg-[#080808] text-white flex justify-center items-center rounded-full">
                {userData.name?.[0]?.toUpperCase()}
              </div>
            )}
          </button>

          {showpopup && (
            <div className="absolute right-[1%] top-[110%] w-[170px] bg-[#f5f2f2] rounded-[10px] border border-[#aaa] z-50">
              <ul className="text-[16px] font-semibold flex flex-col list-none py-[2px] px-[8px]">
                {!userData && (
                  <li
                    className="p-[0px] py-[5px] hover:bg-[#d1caca] cursor-pointer"
                    onClick={() => {
                      navigate("/Login");
                      setShowpopup(false);
                    }}
                  >
                    Log In
                  </li>
                )}

                {userData && (
                  <li
                    className="py-[5px] hover:bg-[#d1caca] cursor-pointer"
                    onClick={() => {
                      handleLogOut();
                      setShowpopup(false);
                    }}
                  >
                    Log Out
                  </li>
                )}

                <div className="w-full h-[1px] bg-[#c1c0c0] my-[5px]"></div>

                <li
                  className="px-4 py-[5px] hover:bg-[#d1caca] cursor-pointer"
                  onClick={() => {
                    navigate("/ListingPage1");
                    setShowpopup(false);
                  }}
                >
                  List your Home
                </li>
                <li className="px-4 py-[5px] hover:bg-[#d1caca] cursor-pointer">
                  My Listing
                </li>
                <li className="px-4 py-[5px] hover:bg-[#d1caca] cursor-pointer">
                  Check Booking
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Category Icons Bar */}
      <div className="w-full h-[90px] flex items-center justify-center gap-5 px-[10px] overflow-x-auto no-scrollbar mt-[5px]">
        {[
          { icon: <MdWhatshot />, label: "Trending" },
          { icon: <GiFamilyHouse />, label: "Villa" },
          { icon: <MdBedroomParent />, label: "Farm House" },
          {
            icon: <MdOutlinePool />,
            className: "ml-[10px]",
            label: "Pool House",
          },
          { icon: <GiWoodCabin />, label: "Rooms" },
          { icon: <SiHomeassistantcommunitystore />, label: "Flat" },
          { icon: <IoBedOutline />, label: "PG" },
          { icon: <FaTreeCity />, label: "Cabin" },
          { icon: <BiBuildingHouse />, label: "Shops" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-[13px] hover:border-b border-[#aaa8a8] cursor-pointer min-w-[60px] ${
              item.className || ""
            }`}
          >
            <div className="text-[24px] text-gray-700">{item.icon}</div>
            <span className="mt-[2px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
