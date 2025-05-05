import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PolarAreaChart = ({ darkMode }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Clean up any existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    // Configure colors based on dark mode
    const gridColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    
    // Data with colorful but theme-appropriate colors
    const chartColors = [
      'rgba(54, 162, 235, 0.7)',   // Blue
      'rgba(75, 192, 192, 0.7)',   // Teal
      'rgba(153, 102, 255, 0.7)',  // Purple
      'rgba(255, 159, 64, 0.7)',   // Orange
      'rgba(255, 99, 132, 0.7)'    // Red
    ];
    
    const chartBorderColors = [
      'rgba(54, 162, 235, 1)',     // Blue
      'rgba(75, 192, 192, 1)',     // Teal
      'rgba(153, 102, 255, 1)',    // Purple
      'rgba(255, 159, 64, 1)',     // Orange
      'rgba(255, 99, 132, 1)'      // Red
    ];

    chartInstance.current = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['New', 'Returning', 'Referred', 'Social', 'Direct'],
        datasets: [{
          data: [12, 19, 8, 15, 10],
          backgroundColor: chartColors,
          borderColor: chartBorderColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            grid: {
              color: gridColor
            },
            angleLines: {
              color: gridColor
            },
            pointLabels: {
              color: textColor,
              font: {
                size: 10
              }
            },
            ticks: {
              color: textColor,
              backdropColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
              font: {
                size: 9
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: textColor,
              font: {
                size: 10
              },
              boxWidth: 12,
              padding: 10
            }
          },
          tooltip: {
            backgroundColor: darkMode ? '#262626' : 'white',
            titleColor: darkMode ? 'white' : 'black',
            bodyColor: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
            borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            borderWidth: 1,
            usePointStyle: true,
            boxPadding: 4
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

export default PolarAreaChart;
