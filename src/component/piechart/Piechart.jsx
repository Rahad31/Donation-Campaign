import React from "react";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  const Length = localStorage.getItem("Donation-list");
  const int = JSON.parse(Length);
  let donated;
  if (!int) {
    donated = 0;
  } else {
    donated = int.length;
    console.log(donated);
  }

  const [cards, setcards] = useState([]);
  useEffect(() => {
    fetch("../donation.json")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  const Total = cards.length;
  const total = Total - donated;
  // let donate = 0;
  // if (donated > 0) {
  //   donate = donated;
  // }
  return (
    <div className="w-">
      <div className="container-fluid mb-3 flex justify-center items-center mt-40">
        <Chart
          type="pie"
          width={400}
          height={500}
          series={[donated, Total]}
          options={{
            title: { text: "" },
            noData: { text: "Empty Data" },
            colors: ["#FF444A", "#00C49F"],
            labels: ["Your Donation", "Total Donation"],
          }}
        ></Chart>
      </div>
    </div>
  );
};

export default Piechart;
