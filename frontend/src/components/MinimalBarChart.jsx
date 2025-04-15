import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [100, 200, 150, 80, 120],
      backgroundColor: '#3b82f6', // blue-500
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // hide legend
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      display: false, // hide x-axis
      grid: {
        display: false, // hide x grid lines
      },
    },
    y: {
      display: false, // hide y-axis
      grid: {
        display: false, // hide y grid lines
      },
    },
  },
};

export default function SalesBarMini() {
  return <Bar data={data} options={options} />;
}
