import React from "react";

const Summary = () => {
  return (
    <div className="summary-wrapper">
      <div className="username-section">
        <h1>Hi, User!</h1>
        <p className="welcome-sub">Welcome back to your trading dashboard</p>
      </div>

      <div className="dashboard-grid">
        <div className="summary-card">
          <div className="card-header">
            <span>
              <i className="fa fa-pie-chart section-icon"></i> Equity
            </span>
          </div>
          <div className="card-body">
            <div className="main-stat">
              <h2>3.74k</h2>
              <p>Margin available</p>
            </div>
            <div className="divider-vert"></div>
            <div className="sub-stats">
              <div className="sub-stat-row">
                <span className="stat-label">Margins used</span>
                <span className="stat-val">0</span>
              </div>
              <div className="sub-stat-row">
                <span className="stat-label">Opening balance</span>
                <span className="stat-val">3.74k</span>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-header">
            <span>
              <i className="fa fa-briefcase section-icon"></i> Holdings (13)
            </span>
          </div>
          <div className="card-body">
            <div className="main-stat">
              <h2 className="profit">
                1.55k <small className="percent-badge">+5.20%</small>
              </h2>
              <p>P&L (Unrealized)</p>
            </div>
            <div className="divider-vert"></div>
            <div className="sub-stats">
              <div className="sub-stat-row">
                <span className="stat-label">Current Value</span>
                <span className="stat-val">31.43k</span>
              </div>
              <div className="sub-stat-row">
                <span className="stat-label">Investment</span>
                <span className="stat-val">29.88k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
