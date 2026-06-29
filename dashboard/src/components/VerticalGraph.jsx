import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Holdings Valuation",
      font: {
        family: "Inter, sans-serif",
        size: 14,
        weight: "500",
      },
      color: "#444",
      padding: { bottom: 15 },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#f1f1f1",
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div style={{ height: "300px", width: "100%", marginTop: "20px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
