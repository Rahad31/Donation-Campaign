import Homecard from "../Homecard/Homecard";
import { useEffect, useState } from "react";


const Homecards = () => {
    const [cards, setcards] = useState([]);
     useEffect(() => {
       fetch("../donation.json")
         .then((res) => res.json())
         .then((data) => setcards(data));
     }, []);
    return (
        <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
            {
                cards.map(card => <Homecard key={card.Title} card={card}></Homecard>)
            }
        </div>
    );
};

export default Homecards;