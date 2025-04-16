// For the green bar chart in the Sales card
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const MiniBarChart = ({ dataSetColor = '#00FF96', percentage = 24 }) => {
  const data = {
    labels: Array(6).fill(''), // Keeping 6 bars
    datasets: [
      {
        label: 'Sales',
        data: [5, 8, 6, 7, 9, 6],
        backgroundColor: dataSetColor,
        borderRadius: {
          topLeft: 2,
          topRight: 2,
          bottomLeft: 2,
          bottomRight: 2
        },
        borderSkipped: false,
        barThickness: 4, // Even thinner bars (reduced from 3 to 2)
        maxBarThickness: 2,
        // Further reduce spacing between bars by increasing these values
        categoryPercentage: 0.98, // Increased from 0.9 to 0.98
        barPercentage: 0.98,     // Increased from 0.9 to 0.98
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        min: 0,
      },
    },
  };

  return (
    <div style={{ 
      position: 'relative', 
      height: '50px', // Reduced height from 60px to 40px
      width: '40px',  // Reduced width from 60px to 50px
      marginLeft: 'auto', // Keep right alignment
      marginRight: '2px', // Small margin from right edge
      marginTop: '8px' // Add top margin to center it better
    }}>
      {/* Percentage indicator */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-16px',
          right: '0',
          fontSize: '10px', // Reduced from 11px to 10px
          fontWeight: '500',
          color: percentage > 0 ? dataSetColor : '#ff4d4d'
        }}
      >
        {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
      </div>
      
      <Bar data={data} options={options} />
    </div>
  );
};

export default MiniBarChart;