// src/components/PointStyleChart.jsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Point Styling Example',
    },
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Styled Points',
      data: [10, 20, 15, 30, 25],
      borderColor: 'rgb(59, 130, 246)', // Tailwind blue-500
      backgroundColor: 'rgb(59, 130, 246)',
      pointStyle: 'rectRot',
      pointRadius: 10,
      pointHoverRadius: 15,
    },
  ],
};

function PointStyleChart() {
  return <Line options={options} data={data} />;
}

export default PointStyleChart;
