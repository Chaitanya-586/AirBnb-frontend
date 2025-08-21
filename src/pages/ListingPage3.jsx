import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage3() {
  const navigate = useNavigate();
  const {
    title, setTitle,
    description, setDescription,
    frontEndImage1, setFrontEndImage1,
    frontEndImage2, setFrontEndImage2,
    frontEndImage3, setFrontEndImage3,
    backEndImage1, setBackEndImage1,
    backEndImage2, setBackEndImage2,
    backEndImage3, setBackEndImage3,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
    category, setCategory,
    handleAddListing,
    adding, setAdding,
  } = useContext(listingDataContext);

  
  if (!title && !landmark && !city) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl">
        Loading Listing Preview...
      </div>
    );
  }

  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center gap-[10px] flex-col overflow-auto relative">
      
      <div
        className="w-[50px] h-[50px] bg-red cursor-pointer absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeftLong className="w-[25px] h-[25px] text-white" />
      </div>

     
      <div className="w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]">
        <h1 className="text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden px-[70px] md:px-[0px]">
          {`In ${landmark?.toUpperCase() || "UNKNOWN"}, ${city?.toUpperCase() || "UNKNOWN"}`}
        </h1>
      </div>

      
      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row">
        <div className="w-full h-[65%] md:w-[70%] md:h-full overflow-hidden flex items-center justify-center border-2 border-white">
          {frontEndImage1 && (
            <img src={frontEndImage1} alt="Preview 1" className="w-full object-cover" />
          )}
        </div>
        <div className="w-full h-[50%] flex items-center justify-center md:w-[50%] md:h-full md:flex-col">
          <div className="w-full h-full overflow-hidden flex items-center justify-center border-2">
            {frontEndImage2 && (
              <img src={frontEndImage2} alt="Preview 2" className="w-full object-cover" />
            )}
          </div>
          <div className="w-full h-full overflow-hidden flex items-center justify-center border-2">
            {frontEndImage3 && (
              <img src={frontEndImage3} alt="Preview 3" className="w-full object-cover" />
            )}
          </div>
        </div>
      </div>

      
      <div className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]">
        {`${title?.toUpperCase() || "TITLE"} ${category?.toUpperCase() || "CATEGORY"} , ${landmark?.toUpperCase() || ""}`}
      </div>

      <div className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800">
        {description?.toUpperCase() || "NO DESCRIPTION PROVIDED"}
      </div>

      <div className="w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]">
        {`Rs.${rent || 0}/day`}
      </div>

     
      <div className="w-[95%] h-[50px] flex items-center justify-start px-[110px]">
        <button
          className="px-[30px] py-[10px] bg-red text-white text-[18px] md:px-[100px] rounded-lg text-nowrap"
          onClick={handleAddListing}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add Listing"}
        </button>
      </div>
    </div>
  );
}

export default ListingPage3;
