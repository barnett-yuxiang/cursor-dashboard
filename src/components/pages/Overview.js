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
  const stockData = {
    labels: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB'],
    values: [180, 2800, 340, 3400, 300],
  };

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'AAPL',
        data: [150, 155, 148, 152, 160],
        borderColor: '#818cf8',
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'GOOGL',
        data: [2700, 2750, 2800, 2850, 2900],
        borderColor: '#34d399',
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0,
      }
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f3f4f6',
        },
        ticks: {
          color: '#6b7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: '#f3f4f6',
        },
        ticks: {
          color: '#6b7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
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
          <div style={{ height: '300px' }}>
            <Bar 
              data={{
                labels: stockData.labels,
                datasets: [{
                  label: 'Stock Price',
                  data: stockData.values,
                  backgroundColor: '#818cf8',
                  borderColor: '#818cf8',
                  borderWidth: 1,
                }]
              }} 
              options={barOptions}
            />
          </div>
        </div>
        <div className="chart-box">
          <h2>Stock Price Trends</h2>
          <div style={{ height: '300px' }}>
            <Line data={trendData} options={lineOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview; 