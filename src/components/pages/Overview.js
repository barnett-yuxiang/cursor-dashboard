import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  // Stock data
  const stockData = {
    labels: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB'],
    values: [180, 2800, 340, 3400, 300],
  };

  // Trend data
  const trendData = {
    labels: ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01'],
    datasets: [
      {
        label: 'AAPL',
        data: [150, 155, 148, 152, 160],
        borderColor: 'rgba(99, 102, 241, 1)',
        tension: 0.4,
      },
      {
        label: 'GOOGL',
        data: [2700, 2750, 2800, 2850, 2900],
        borderColor: 'rgba(52, 211, 153, 1)',
        tension: 0.4,
      }
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <h1 className="page-title">Overview</h1>
      <div className="charts-container">
        <div className="chart-box">
          <h2>Current Stock Prices</h2>
          <Bar 
            data={{
              labels: stockData.labels,
              datasets: [{
                label: 'value',
                data: stockData.values,
                backgroundColor: 'rgba(99, 102, 241, 0.5)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 1,
              }]
            }} 
            options={barOptions}
          />
        </div>
        <div className="chart-box">
          <h2>Stock Price Trends</h2>
          <Line data={trendData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default Overview; 