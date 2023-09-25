import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../Utility/utility";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Carddetails = () => {
  const Homecard = useLoaderData();
  const { Donation_id } = useParams();

  const idInt = parseInt(Donation_id);
  const carddetail = Homecard.find(
    (carddetail) => carddetail.Donation_id === idInt
  );
  console.log(carddetail);
  const handleDonation = () => {
    saveDonation(idInt);
    toast("Successfully Donated !");
  };
  const buttonbgColor = {
    backgroundColor: carddetail.Text_and_button_bg,
  };

  return (
    <div className="container mx-auto p-4 lg:p-0 relative">
      <div>
        <img
          className=" h-[194px] w-screen mx-auto container md:h-auto lg:h-[700px] relative"
          src={carddetail.Picture}
        ></img>
        <div className=" container invisible h-[130px] bg-slate-950 opacity-20   absolute left-0 right-0  bottom-[232px] md:visible md:left-4 md:bottom-[209px] lg:visible lg:left-0 lg:bottom-[144px]"></div>
      </div>
      <div className="absolute left-[70px] bottom-[250px] md:left-0 md:bottom-[250px] lg:left-0 lg:bottom-[182px] ">
        <button
          onClick={handleDonation}
          style={buttonbgColor}
          className="w-[180px] h-[56px] ml-[53px]   text-white text-xl font-semibold rounded-md"
        >
          Donate {carddetail.Price}
        </button>
      </div>

      <h3 className="mt-14 text-4xl font-bold">{carddetail.Title}</h3>
      <p className="my-6 text-base font-normal">{carddetail.Description}</p>
      <ToastContainer />
    </div>
  );
};

export default Carddetails;
