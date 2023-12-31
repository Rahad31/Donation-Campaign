import React from "react";

const DonationCard = ({ donation }) => {
  const {
    Donation_id,
    Picture,
    Title,
    Category,
    Category_bg,
    Card_bg,
    Text_and_button_bg,
    Description,
    Price,
  } = donation;
  const cardbgColor = {
    backgroundColor: Card_bg,
  };
  const textColor = {
    color: Text_and_button_bg,
  };
  const categoryColor = {
    backgroundColor: Category_bg,
  };
  const buttonbgColor = {
    backgroundColor: Text_and_button_bg,
  };
  return (
    <div
      style={cardbgColor}
      className="flex flex-row gap-3 rounded-md md:mx-4 w-[380px] md:w-[758px] lg:mx-0 lg:w-[758px] h-[200px] "
    >
      <img className="w-[220px] h-auto rounded-l-md" src={Picture}></img>
      <div className="flex flex-col gap-1 mt-2 md:gap-3 md:mt-5">
        <div
          style={categoryColor}
          className="p-2 h-[25px] w-min flex justify-left items-center   rounded "
        >
          <div style={textColor} className="">
            {Category}
          </div>
        </div>
        <p className="">{Title}</p>
        <p style={textColor} className="">
          {Price}
        </p>
        <button
          style={buttonbgColor}
          className="w-[140px] h-[56px]    text-white text-xl font-semibold rounded-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
