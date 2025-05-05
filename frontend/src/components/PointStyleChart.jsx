// src/components/PointStyleChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PointStyleChart = ({ darkMode }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    // Configure colors based on dark mode
    const gridColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          pointStyle: 'circle',
          pointRadius: 5,
          pointHoverRadius: 8,
          tension: 0.4,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: darkMode ? '#262626' : 'white',
            titleColor: darkMode ? 'white' : 'black',
            bodyColor: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
            borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            borderWidth: 1,
          }
        },
        scales: {
          x: {
            grid: {
              color: gridColor,
              borderColor: gridColor,
              display: true,
            },
            ticks: {
              color: textColor,
              font: {
                size: 10
              }
            }
          },
          y: {
            grid: {
              color: gridColor,
              borderColor: gridColor,
              display: true,
            },
            ticks: {
              color: textColor,
              font: {
                size: 10
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [darkMode]); // Re-create chart when darkMode changes

  return <canvas ref={chartRef} />;
};

export default PointStyleChart;
