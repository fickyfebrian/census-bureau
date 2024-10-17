import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.Year),
    datasets: [
      {
        label: "Populasi",
        data: data.map((item) => item.Population),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: false },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: true, text: "Tahun" },
      },
      y: {
        beginAtZero: false,
        title: { display: true, text: "Jumlah Populasi" },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Menetapkan ukuran 100% */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Line Chart</h2>
      {data.length > 0 ? (
        <Line className="h-[]" data={chartData} options={options} />
      ) : (
        <p>Tidak ada data untuk ditampilkan.</p>
      )}
    </div>
  );
};

export default LineChart;
