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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white',
        boxWidth: 10,
        padding: 5,
        font: {
          size: 10 // Smaller font size
        }
      }
    },
    title: {
      display: false // Hide the title since we have one in the container
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
        font: {
          size: 8 // Smaller font size for x-axis
        }
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      ticks: {
        color: 'white',
        font: {
          size: 8 // Smaller font size for y-axis
        }
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  },
  elements: {
    line: {
      borderWidth: 2 // Thinner line
    },
    point: {
      radius: 3, // Smaller points
      hoverRadius: 5
    }
  }
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Styled Points',
      data: [10, 20, 15, 30, 25],
      borderColor: 'rgb(255, 255, 255)', // Changed to white
      backgroundColor: 'rgb(59, 130, 246)',
      pointStyle: 'rectRot',
      pointRadius: 8,
      pointHoverRadius: 15,
    },
  ],
};

function PointStyleChart() {
  return <Line options={options} data={data} />;
}

export default PointStyleChart;
