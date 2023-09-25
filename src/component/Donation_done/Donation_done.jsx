import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/utility";
import DonationCard from "../Donationcard/DonationCard";
const Donation_done = () => {
  const cards = useLoaderData();

  const [donation, setDonation] = useState([]);
  const [displaydonation, setDisplaydonation] = useState([]);

  useEffect(() => {
    const storedDonation = getStoredDonation();
    if (cards.length > 0) {
      const donationdone = [];
      for (const id of storedDonation) {
        const donation = cards.find((donation) => donation.Donation_id === id);
        if (donation) {
          donationdone.push(donation);
        }
      }
      setDonation(donationdone);
      setDisplaydonation(donationdone);
    }
  }, [cards]);

  return (
    <div className="container mx-auto my-10 flex flex-row flex-wrap gap-5 justify-center items-center">
      
        {displaydonation.map((donation) => (
          <DonationCard
            key={donation.Donation_id}
            donation={donation}
          ></DonationCard>
        ))}
      
    </div>
  );
};

export default Donation_done;
