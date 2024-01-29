import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler
);

const ChartAreaComponent = () => {
  const [data, setData] = useState({
    labels: [0],
    datasets: [
      {
        label: "Realtime Traffic",
        data: [0],
        fill: "start",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  });

  const config = {
    plugins: {
      filler: {
        propagate: true,
      },
      title: {
        display: false,
        text: "Realtime Traffic",
      },
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time data update
      const newLabel = new Date().toLocaleTimeString();
      const newData = Math.random() * 100;

      setData((prevData) => {
        const updatedLabels = [...prevData.labels, newLabel].slice(-10); // Keep only the last 10 labels
        const updatedData = [...prevData.datasets[0].data, newData].slice(-10); // Keep only the last 10 data points

        return {
          labels: updatedLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData,
            },
          ],
        };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <Line data={data} options={config} />
    </div>
  );
};

export default ChartAreaComponent;
