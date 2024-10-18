import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  if (data.length === 0) return <p>Tidak ada data untuk ditampilkan.</p>;

  const generateColors = (numColors) => {
    return [
      "rgba(84, 190, 205, 0.7)",     
      "rgba(115, 201, 214, 0.7)",   
      "rgba(147, 213, 220, 0.7)",    
      "rgba(176, 223, 228, 0.7)",    
      "rgba(199, 232, 235, 0.7)",    
      "rgba(220, 239, 241, 0.7)",    
      "rgba(169, 217, 223, 0.7)",    
      "rgba(132, 207, 214, 0.7)",    
      "rgba(100, 196, 205, 0.7)",    
      "rgba(92, 187, 199, 0.7)",     
    ].slice(0, numColors);
  };

  const backgroundColors = generateColors(data.length);
  const borderColors = backgroundColors.map((color) =>
    color.replace("0.7", "1")
  );

  const chartData = {
    labels: data.map((item) => item.Year),
    datasets: [
      {
        data: data.map((item) => item.Population),
        backgroundColor: backgroundColors,
        borderColor: borderColors.slice(0, data.length),
        borderWidth: 0,
        hoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 20,
          font: {
            size: 12,
          },
          color: '#666',
        },
      },
      title: {
        display: false,
        text: "Distribusi Populasi AS per Tahun",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const dataset = context.dataset;
            const total = dataset.data.reduce((acc, data) => acc + data, 0);
            const percentage = ((context.raw / total) * 100).toFixed(2);
            return `${label}: ${new Intl.NumberFormat("en-US").format(
              context.raw
            )} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2 className="text-md md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
        Pie Chart
      </h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;