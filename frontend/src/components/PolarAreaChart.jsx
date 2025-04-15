import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
  const data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 0, // Remove borders between segments
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This is crucial for fitting inside the container
    plugins: {
      legend: {
        position: 'top', // Changed from 'right' to 'top' for better space usage
        align: 'start',
        labels: {
          color: 'white',
          boxWidth: 10,
          padding: 8,
          font: { size: 10 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: { size: 12 },
        bodyFont: { size: 11 }
      }
    },
    scales: {
      r: {
        ticks: {
          display: true,
          backdropColor: 'transparent',
          color: 'rgba(255, 255, 255, 0.7)',
          font: { size: 8 },
          z: 1
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        pointLabels: {
          color: 'white',
          font: { size: 9 }
        }
      }
    }
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarAreaChart;
