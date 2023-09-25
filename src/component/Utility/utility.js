const getStoredDonation = () =>{
  const storedDonation = localStorage.getItem("Donation-list");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
}
const saveDonation = (Donation_id) => {
  const storedDonation = getStoredDonation();
  const exists = storedDonation.find((Id) => Id === Donation_id);
  if (!exists) {
    storedDonation.push(Donation_id);
    localStorage.setItem("Donation-list", JSON.stringify(storedDonation));
  }
};

export { getStoredDonation, saveDonation };