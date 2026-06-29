import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  // Calculations
  const totalInvestment = positions.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
  const totalCurrentValue = positions.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
  const totalPL = totalCurrentValue - totalInvestment;
  const plPercentage = totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;

  return (
    <div className="positions-section">
      <h3 className="section-title">Positions ({positions.length})</h3>

      <div className="table-wrapper">
        <table className="kite-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. price</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = curValue - investment;
              const isProfit = pnl >= 0.0;
              const isChgDown = stock.day ? stock.day.startsWith("-") : !isProfit;

              return (
                <tr key={index} className="table-row-hover">
                  <td className="product-cell">
                    <span className="product-badge">{stock.product}</span>
                  </td>
                  <td className="symbol-cell">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={isProfit ? "profit" : "loss"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={isChgDown ? "loss" : "profit"}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary-banner-row">
        <div className="summary-col">
          <span className="summary-lbl">Total margins used</span>
          <h4 className="summary-val">₹{totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
        </div>
        <div className="summary-col">
          <span className="summary-lbl">Current value</span>
          <h4 className="summary-val">₹{totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
        </div>
        <div className="summary-col">
          <span className="summary-lbl">Total Realized P&L</span>
          <h4 className={`summary-val ${totalPL >= 0 ? "profit" : "loss"}`}>
            {totalPL >= 0 ? "+" : ""}
            {totalPL.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            <span className="percent-badge-small">
              ({plPercentage >= 0 ? "+" : ""}
              {plPercentage.toFixed(2)}%)
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Positions;