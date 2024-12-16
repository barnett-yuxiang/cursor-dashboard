import React, { useState } from 'react';
import './DashboardLayout.css';

const DashboardLayout = ({ children, onPageChange }) => {
  const [activePage, setActivePage] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'markets', label: 'Markets' },
    { id: 'trading', label: 'Trading' },
    { id: 'reports', label: 'Reports' },
  ];

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    onPageChange(pageId);
  };

  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <div className="sidebar-header">Dashboard</div>
        <ul className="sidebar-menu">
          {menuItems.map(item => (
            <li
              key={item.id}
              className={activePage === item.id ? 'active' : ''}
              onClick={() => handlePageChange(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout; 