import React from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const TableSparkline = ({ priceData, width }) => {
  return (
    <Line
      width={width}
      height={width / 4 + 1}
      options={{
        elements: {
          point: { radius: 0, hoverRadius: 0 },
          line: { tension: 0.4, borderWidth: 2 },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: { display: false, grid: { display: false } },
          y: { display: false, grid: { display: false } },
        },
      }}
      data={{
        labels: priceData.map((el, i) => i),
        datasets: [
          {
            borderColor:
              priceData[0] > priceData[priceData.length - 1]
                ? "rgb(209,78,77)"
                : "rgb(42,141,120)",
            data: priceData.map((el) => el),
          },
        ],
      }}
    />
  );
};

export default TableSparkline;
