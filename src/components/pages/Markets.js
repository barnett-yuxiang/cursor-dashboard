import React from 'react';
import { Line } from 'react-chartjs-2';

const Markets = () => {
  const marketData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'S&P 500',
        data: [4200, 4300, 4250, 4400, 4380, 4450],
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
      },
      {
        label: 'NASDAQ',
        data: [14200, 14400, 14300, 14600, 14500, 14700],
        borderColor: 'rgba(52, 211, 153, 1)',
        tension: 0.4,
      },
      {
        label: 'DOW',
        data: [35200, 35400, 35300, 35600, 35500, 35800],
        borderColor: 'rgba(251, 146, 60, 1)',
        tension: 0.4,
      }
    ]
  };

  return (
    <div>
      <h1 className="page-title">Markets</h1>
      <div className="chart-box">
        <h2>Global Market Indices</h2>
        <Line data={marketData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }} />
      </div>
    </div>
  );
};

export default Markets; 