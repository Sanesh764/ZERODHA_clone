import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { holdings as defaultHoldings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch from server, fallback to merging local + default mock data
    axios.get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Holdings: Backend API offline, loading mock data.", err.message);
        
        // Merge default mock holdings with custom bought holdings in this session
        const customHoldingsRaw = localStorage.getItem("custom_holdings");
        const customHoldings = customHoldingsRaw ? JSON.parse(customHoldingsRaw) : [];
        
        // Combine them
        const merged = [...defaultHoldings];
        customHoldings.forEach((custom) => {
          const match = merged.find((h) => h.name === custom.name);
          if (match) {
            // Update quantity and recalculate average
            const prevTotal = match.avg * match.qty;
            const newTotal = custom.avg * custom.qty;
            match.qty += custom.qty;
            match.avg = (prevTotal + newTotal) / match.qty;
          } else {
            merged.push(custom);
          }
        });
        
        setAllHoldings(merged);
        setLoading(false);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Market Price (₹)",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: allHoldings.map((stock) => {
          const curValue = stock.price * stock.qty;
          const investment = stock.avg * stock.qty;
          return curValue >= investment ? "rgba(25, 175, 85, 0.6)" : "rgba(239, 94, 62, 0.6)";
        }),
        borderColor: allHoldings.map((stock) => {
          const curValue = stock.price * stock.qty;
          const investment = stock.avg * stock.qty;
          return curValue >= investment ? "#19af55" : "#ec5e3e";
        }),
        borderWidth: 1.5,
        borderRadius: 4,
      },
    ],
  };

  // Calculations for total summary card values
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
  const totalCurrentValue = allHoldings.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
  const totalPL = totalCurrentValue - totalInvestment;
  const plPercentage = totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;

  if (loading) {
    return <div className="loading-state">Loading holdings...</div>;
  }

  return (
    <div className="holdings-section">
      <h3 className="section-title">Holdings ({allHoldings.length})</h3>

      <div className="table-wrapper">
        <table className="kite-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = curValue - investment;
              const isProfit = pnl >= 0.0;
              
              // Parse changes
              const isNetDown = stock.net ? stock.net.startsWith("-") : !isProfit;
              const isDayDown = stock.day ? stock.day.startsWith("-") : false;

              return (
                <tr key={index} className="table-row-hover">
                  <td className="symbol-cell">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={isProfit ? "profit" : "loss"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={isNetDown ? "loss" : "profit"}>{stock.net || "0.00%"}</td>
                  <td className={isDayDown ? "loss" : "profit"}>{stock.day || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary-banner-row">
        <div className="summary-col">
          <span className="summary-lbl">Total investment</span>
          <h4 className="summary-val">₹{totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
        </div>
        <div className="summary-col">
          <span className="summary-lbl">Current value</span>
          <h4 className="summary-val">₹{totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
        </div>
        <div className="summary-col">
          <span className="summary-lbl">P&L</span>
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

      <div className="chart-container-holdings">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;