import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  coinHistory?.data?.history?.forEach((entry) => {
    coinPrice.push(entry.price);
    coinTimestamp.push(new Date(entry.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp.reverse(), // Optional: reverse for chronological order
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h3 className="font-jetBrains">{coinName} Price Chart</h3>
      <div>
        <h4 className="font-jetBrains">{coinHistory?.data?.change}%</h4>
        <h4 className="font-jetBrains mb-4">
          Current {coinName} Price: ${currentPrice}
        </h4>
      </div>

      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
