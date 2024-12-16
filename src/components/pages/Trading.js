import React from 'react';

const Trading = () => {
  const trades = [
    { id: 1, symbol: 'AAPL', type: 'BUY', quantity: 100, price: 180.50, total: 18050 },
    { id: 2, symbol: 'GOOGL', type: 'SELL', quantity: 50, price: 2800.75, total: 140037.50 },
    { id: 3, symbol: 'MSFT', type: 'BUY', quantity: 75, price: 340.25, total: 25518.75 },
  ];

  return (
    <div>
      <h1 className="page-title">Trading</h1>
      <div className="chart-box">
        <h2>Recent Trades</h2>
        <table className="trades-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {trades.map(trade => (
              <tr key={trade.id}>
                <td>{trade.symbol}</td>
                <td className={trade.type.toLowerCase()}>{trade.type}</td>
                <td>{trade.quantity}</td>
                <td>${trade.price}</td>
                <td>${trade.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trading; 