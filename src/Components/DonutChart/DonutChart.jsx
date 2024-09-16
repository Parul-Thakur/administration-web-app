import React from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "../../utils/ThemeContext"; // Adjust the import path as needed

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export default function DonutChart() {
  const { theme } = useTheme();

  // Determine the color based on the theme
  const textColor = theme === 'light' ? 'var(--text-head)' : '#98a8c2';
  const tooltipColor = theme === 'light' ? 'var(--text-head)' : '#98a8c2';

  const data = {
    labels: ["Yearly Pages Saved", "Daily Pages Saved"],
    datasets: [
      {
        label: "Pages Saved",
        data: [300, 50],
        backgroundColor: ["#0b57d0", "#a8c7fa"], // Adjust if needed
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 10, // Add padding to the top
        bottom: 20, // Add padding to the bottom
       
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: textColor, // Use dynamic color for legend labels
        },
      },
      title: {
        display: true,
        text: "Pages Saved Distribution",
        color: textColor, // Use dynamic color for title
        font: {
          size: 14, // Smaller font size for title
        },
        padding: {
          top: 0, // Remove top padding
          bottom: 30, // Add padding below the title
        },
        textAlign: "left", 
      },
      tooltip: {
        callbacks: {
          labelColor: function (context) {
            return {
              borderColor: tooltipColor, // Use dynamic color for tooltip border
              backgroundColor: tooltipColor, // Use dynamic color for tooltip background
            };
          },
          titleColor: function (context) {
            return tooltipColor; // Use dynamic color for tooltip title
          },
        },
      },
    },
    elements: {
      arc: {
        borderColor: "transparent",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
