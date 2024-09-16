import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getChartData } from "./barChartData";
import './BarChart.css'; // Import CSS for positioning

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ view }) => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const chartData = getChartData(view);
    const total = chartData.datasets[0].data.reduce((sum, value) => sum + value, 0);
    const descriptions = {
      today: "Today's data",
      monthly: "This month",
      yearly: "This year",
    };
    setInfo(`${descriptions[view]}:\n${total}`);
  }, [view]);

  const chartData = getChartData(view);

  return (
    <div className="bar-chart-container" >
      <div className="info-card" style={{  backgroundColor: "var(--btn-bg)", color:"var(--btn-text)"}}>{info}</div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `Prints: ${tooltipItem.raw}`;
                },
              },
            },
          },
          scales: {
            x: { grid: { display: false } },
            y: {
              beginAtZero: true,
              title: { display: true, text: "Number of Prints" },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
