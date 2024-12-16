import React, { useState } from 'react';
import DashboardLayout from './components/Layout/DashboardLayout';
import Overview from './components/pages/Overview';
import Markets from './components/pages/Markets';
import Trading from './components/pages/Trading';
import Reports from './components/pages/Reports';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const renderPage = () => {
    switch(currentPage) {
      case 'markets':
        return <Markets />;
      case 'trading':
        return <Trading />;
      case 'reports':
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <DashboardLayout onPageChange={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
}

export default App; 