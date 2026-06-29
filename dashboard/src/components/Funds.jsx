import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-section">
      <div className="funds-alert-banner">
        <span className="info-icon">💡</span>
        <p>Instant, zero-cost fund transfers with UPI. Withdrawals take up to 24 hours to process.</p>
      </div>

      <div className="funds-grid">
        {/* Equity Section */}
        <div className="funds-col-equity">
          <div className="funds-card-header">
            <h3>Equity Segment</h3>
            <div className="funds-action-buttons">
              <Link className="btn-kite btn-kite-green">Add funds</Link>
              <Link className="btn-kite btn-kite-blue">Withdraw</Link>
            </div>
          </div>

          <div className="margin-breakdown-table">
            <div className="breakdown-row highlight">
              <span className="lbl">Available margin</span>
              <span className="val primary-val">₹4,043.10</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Used margin</span>
              <span className="val">₹3,757.30</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Available cash</span>
              <span className="val">₹4,043.10</span>
            </div>
            <hr className="breakdown-divider" />
            <div className="breakdown-row">
              <span className="lbl">Opening Balance</span>
              <span className="val">₹4,043.10</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Payin</span>
              <span className="val">₹4,064.00</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">SPAN Margin</span>
              <span className="val">₹0.00</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Delivery margin</span>
              <span className="val">₹0.00</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Exposure margin</span>
              <span className="val">₹0.00</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Options premium</span>
              <span className="val">₹0.00</span>
            </div>
            <hr className="breakdown-divider" />
            <div className="breakdown-row">
              <span className="lbl">Collateral (Liquid funds)</span>
              <span className="val">₹0.00</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Collateral (Equity)</span>
              <span className="val">₹0.00</span>
            </div>
            <div className="breakdown-row">
              <span className="lbl">Total Collateral</span>
              <span className="val">₹0.00</span>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="funds-col-commodity">
          <div className="funds-card-header">
            <h3>Commodity Segment</h3>
          </div>
          <div className="commodity-card-body">
            <div className="commodity-empty-state">
              <span className="commodity-icon">🪙</span>
              <h4>Commodity trading is not activated</h4>
              <p>To trade in commodity derivatives (MCX), activate your commodity account segment instantly.</p>
              <Link className="btn-kite btn-kite-blue font-weight-500">
                Activate Commodity Segment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;