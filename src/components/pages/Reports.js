import React from 'react';
import { Bar } from 'react-chartjs-2';

const Reports = () => {
  const performanceData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Portfolio Performance',
        data: [12.5, 8.3, 15.7, 9.2],
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderColor: 'rgba(99, 102, 241, 1)',
      }
    ]
  };

  return (
    <div>
      <h1 className="page-title">Reports</h1>
      <div className="reports-grid">
        <div className="chart-box">
          <h2>Quarterly Performance (%)</h2>
          <Bar data={performanceData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            }
          }} />
        </div>
        <div className="chart-box">
          <h2>Portfolio Summary</h2>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-label">Total Value</span>
              <span className="stat-value">$1,234,567</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Return</span>
              <span className="stat-value positive">+12.3%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Active Positions</span>
              <span className="stat-value">15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 