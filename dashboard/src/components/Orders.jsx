import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage
    const localOrdersRaw = localStorage.getItem("orders");
    if (localOrdersRaw) {
      setOrders(JSON.parse(localOrdersRaw));
    }
  }, []);

  const handleClearOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <div className="orders-section">
      <div className="orders-header">
        <h3 className="section-title">Orders ({orders.length})</h3>
        {orders.length > 0 && (
          <button className="btn-clear-orders" onClick={handleClearOrders}>
            Clear Order Book
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <div className="empty-state-card">
          <div className="empty-state-icon">📁</div>
          <h3>No orders placed today</h3>
          <p>Browse the watchlist on the left and place a buy or sell order to get started trading.</p>
          <Link to="/" className="btn-kite btn-kite-blue">
            Get started
          </Link>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="kite-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Instrument</th>
                <th>Product</th>
                <th>Qty.</th>
                <th>Avg. Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const isBuy = order.mode === "BUY";
                return (
                  <tr key={index} className="table-row-hover">
                    <td className="time-cell">{order.time || "10:00 AM"}</td>
                    <td>
                      <span className={`transaction-badge ${isBuy ? "buy" : "sell"}`}>
                        {order.mode}
                      </span>
                    </td>
                    <td className="symbol-cell">{order.name}</td>
                    <td>
                      <span className="product-badge">{order.product || "CNC"}</span>
                    </td>
                    <td>{order.qty}</td>
                    <td>₹{order.price.toFixed(2)}</td>
                    <td>
                      <span className="status-badge complete">COMPLETE</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;