import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const MiniBarChart = ({ dataSetColor = 'rgb(0, 255, 150)' }) => {
  const data = {
    labels: Array(7).fill(''),
    datasets: [
      {
        label: 'Data',
        data: [5, 8, 6, 4, 7, 9, 6],
        backgroundColor: dataSetColor,
        borderRadius: 4,
        barThickness: 8,
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
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div style={{ height: '40px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MiniBarChart;
