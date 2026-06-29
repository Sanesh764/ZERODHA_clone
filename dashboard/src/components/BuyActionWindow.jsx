import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [orderType, setOrderType] = useState("LMT"); // LMT (Limit) or MKT (Market)
  const [productType, setProductType] = useState("CNC"); // CNC (Longterm) or MIS (Intraday)

  // Find the stock price from mock data to initialize/use
  const stock = watchlist.find((s) => s.name === uid);
  const currentLTP = stock ? stock.price : 100.0;

  useEffect(() => {
    setStockPrice(currentLTP);
  }, [uid, currentLTP]);

  const handleTransaction = async () => {
    const qty = parseInt(stockQuantity) || 1;
    const price = orderType === "MKT" ? currentLTP : (parseFloat(stockPrice) || currentLTP);

    const orderData = {
      name: uid,
      qty,
      price,
      mode, // "BUY" or "SELL"
      product: productType,
      type: orderType,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };

    // 1. Try to post to backend API
    try {
      await axios.post("http://localhost:3002/newOrder", orderData);
    } catch (err) {
      console.log("Backend offline, falling back to local state storage:", err.message);
    }

    // 2. Save order to LocalStorage for offline demonstration/working dashboard
    const localOrdersRaw = localStorage.getItem("orders");
    const localOrders = localOrdersRaw ? JSON.parse(localOrdersRaw) : [];
    localOrders.unshift(orderData); // Add new order at the top
    localStorage.setItem("orders", JSON.stringify(localOrders));

    // 3. If BUYing, also add/update mock holdings or positions (optional nice touch for mock interactivity!)
    if (mode === "BUY") {
      const localHoldingsRaw = localStorage.getItem("custom_holdings");
      const localHoldings = localHoldingsRaw ? JSON.parse(localHoldingsRaw) : [];
      const existingHolding = localHoldings.find((h) => h.name === uid);
      if (existingHolding) {
        existingHolding.qty += qty;
        // Average out the cost
        existingHolding.avg = ((existingHolding.avg * (existingHolding.qty - qty)) + (price * qty)) / existingHolding.qty;
      } else {
        localHoldings.push({
          name: uid,
          qty,
          avg: price,
          price: currentLTP,
          net: "+0.00%",
          day: "+0.00%",
        });
      }
      localStorage.setItem("custom_holdings", JSON.stringify(localHoldings));
    }

    closeBuyWindow();
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeBuyWindow();
  };

  const isBuy = mode === "BUY";
  const marginRequired = (stockQuantity * (orderType === "MKT" ? currentLTP : stockPrice)).toFixed(2);

  return (
    <div className="order-ticket-container" id="buy-window">
      {/* Header matching BUY or SELL theme */}
      <div className={`ticket-header ${isBuy ? "buy-theme" : "sell-theme"}`}>
        <div className="ticket-title">
          <h3>
            {isBuy ? "Buy" : "Sell"} {uid} <span>x {stockQuantity} qty</span>
          </h3>
        </div>
        <div className="ticket-exchange">
          <span>NSE</span>
        </div>
      </div>

      {/* Product type tabs */}
      <div className="ticket-product-tabs">
        <label className={`product-tab-label ${productType === "CNC" ? "active" : ""}`}>
          <input
            type="radio"
            name="productType"
            value="CNC"
            checked={productType === "CNC"}
            onChange={() => setProductType("CNC")}
          />
          <span>CNC <small>Longterm</small></span>
        </label>
        <label className={`product-tab-label ${productType === "MIS" ? "active" : ""}`}>
          <input
            type="radio"
            name="productType"
            value="MIS"
            checked={productType === "MIS"}
            onChange={() => setProductType("MIS")}
          />
          <span>MIS <small>Intraday</small></span>
        </label>
      </div>

      {/* Form Fields Section */}
      <div className="ticket-form-body">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="qty">Qty</label>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              value={stockQuantity}
              className="ticket-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              disabled={orderType === "MKT"}
              onChange={(e) => setStockPrice(Math.max(0, parseFloat(e.target.value) || 0))}
              value={orderType === "MKT" ? currentLTP.toFixed(2) : stockPrice}
              className="ticket-input"
            />
          </div>
        </div>

        {/* Order type selectors */}
        <div className="order-type-selectors">
          <label className="type-radio-label">
            <input
              type="radio"
              name="orderType"
              value="LMT"
              checked={orderType === "LMT"}
              onChange={() => setOrderType("LMT")}
            />
            <span>Limit</span>
          </label>
          <label className="type-radio-label">
            <input
              type="radio"
              name="orderType"
              value="MKT"
              checked={orderType === "MKT"}
              onChange={() => setOrderType("MKT")}
            />
            <span>Market</span>
          </label>
        </div>
      </div>

      {/* Actions and Footer */}
      <div className="ticket-footer">
        <div className="margin-estimate">
          <span className="margin-lbl">Margin required</span>
          <span className="margin-val">₹{marginRequired}</span>
        </div>
        <div className="ticket-buttons">
          <button
            className={`btn-ticket-submit ${isBuy ? "btn-buy" : "btn-sell"}`}
            onClick={handleTransaction}
          >
            {isBuy ? "Buy" : "Sell"}
          </button>
          <button className="btn-ticket-cancel" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;