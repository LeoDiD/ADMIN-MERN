// For the green doughnut chart in the Sales card
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const MiniDoughnutChart = ({ dataSetColor = '#00FF96', percentage = 24 }) => {
  // For a doughnut chart, we're displaying percentage as filled portion
  // and remaining percentage as empty portion
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [
          dataSetColor,
          '#333333' // Dark background for remaining portion
        ],
        borderWidth: 0,
        cutout: '70%', // Creates the doughnut hole (70% of radius)
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
    // No scales needed for doughnut chart
  };

  return (
    <div style={{ 
      position: 'relative', 
      height: '50px',
      width: '50px',  // Made slightly wider for the circular shape
      marginLeft: 'auto',
      marginRight: '2px',
      marginTop: '8px'
    }}>
      {/* Percentage display in the center of doughnut */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '11px',
          fontWeight: '700',
          color: 'white',
          zIndex: 10
        }}
      >
        {percentage}%
      </div>
      
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MiniDoughnutChart;