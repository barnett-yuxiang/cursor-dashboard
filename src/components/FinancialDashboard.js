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
import './FinancialDashboard.css';

// 注册 ChartJS 组件
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

const FinancialDashboard = () => {
  // 模拟数据
  const monthlyData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    stockIndex: [3200, 3400, 3300, 3600, 3800, 3700, 3900, 4100, 4000, 4200, 4300, 4250],
    tradingVolume: [2000, 2200, 1800, 2400, 2600, 2300, 2700, 2900, 2800, 3000, 3200, 3100],
  };

  // 股市大盘柱状图配置
  const barChartData = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: '股市指数',
        data: monthlyData.stockIndex,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 交易量曲线图配置
  const lineChartData = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: '交易量',
        data: monthlyData.tradingVolume,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '金融市场概览',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">金融市场仪表板</h1>
      <div className="charts-grid">
        <div className="chart-container">
          <h2 className="chart-title">月度股市指数</h2>
          <Bar data={barChartData} options={options} />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">月度交易量</h2>
          <Line data={lineChartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard; 