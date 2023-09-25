import React from "react";

import Chart from "react-apexcharts";

const Piechart = () => {
  const Length = localStorage.getItem("Donation-list");
  const int = JSON.parse(Length);
  const long = int.length;
  console.log(long);

  return (
    <div>
      <div className="container-fluid mb-3 flex justify-center items-center mt-40">
        <Chart
          type="pie"
          width={500}
          height={500}
          series={[long, 12]}
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
