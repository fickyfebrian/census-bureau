import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  if (data.length === 0) return <p>Tidak ada data untuk ditampilkan.</p>;

  const generateColors = (numColors) => {
    return [
      "rgba(255, 99, 132, 0.7)",
      "rgba(54, 162, 235, 0.7)",
      "rgba(255, 206, 86, 0.7)",
      "rgba(75, 192, 192, 0.7)",
      "rgba(153, 102, 255, 0.7)",
      "rgba(255, 159, 64, 0.7)",
      "rgba(255, 99, 132, 0.7)",
      "rgba(54, 162, 235, 0.7)",
      "rgba(255, 206, 86, 0.7)",
      "rgba(75, 192, 192, 0.7)",
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
        borderColor: borderColors,
        borderWidth: 1,
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
      {/* Menetapkan ukuran 100% */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pie Chart</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
