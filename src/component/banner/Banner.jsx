import Homecard from "../Homecard/Homecard";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  const [cards, setcards] = useState([]);
  const [displaycard, setDisplaycard] = useState(cards);
  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => setDisplaycard(data));
  }, []);

  const getvalue = () => {
    window.location.reload(true);
    const filter = document.getElementById("search").value;
    search.value = " ";
    console.log(filter);
    if (filter == "Health") {
      const Health = cards.filter((card) => card.Category == "Health");
      setDisplaycard(Health);
    } else if (filter == "Clothing") {
      const Clothing = cards.filter((card) => card.Category == "Clothing");
      setDisplaycard(Clothing);
    } else if (filter == "Education") {
      const Education = cards.filter((card) => card.Category == "Education");
      setDisplaycard(Education);
    } else if (filter == "Food") {
      const Food = cards.filter((card) => card.Category == "Food");
      setDisplaycard(Food);
    } else {
      toast("Category Not Matched");
    }
  };
  return (
    <div>
      <div className="mb-10">
        <div className="relative ">
          <img
            src="https://i.ibb.co/2tmZbGT/donation-boxes-being-filled-with-provisions.jpg"
            className="w-full h-[750px] opacity-10 "
          ></img>
        </div>

        <div className="flex flex-col gap-10 p-4 justify-center items-center absolute left-0 right-0  top-[450px] md:top-[480px] lg:bottom-[180px] xl:bottom-[350px] mx-auto">
          {" "}
          <h1 className="text-5xl font-bold text-center ">
            I Grow By Helping People In Need
          </h1>
          <div>
            <div className="form-control">
              <label className="input-group">
                <input
                  id="search"
                  type="text"
                  className="input input-bordered lg:w-[350px]"
                  placeholder="Search here"
                />
                <span
                  onClick={() => getvalue()}
                  className="bg-[#FF444A] text-white"
                >
                  Search
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
        {displaycard.map((card) => (
          <Homecard key={card.Title} card={card}></Homecard>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Banner;
