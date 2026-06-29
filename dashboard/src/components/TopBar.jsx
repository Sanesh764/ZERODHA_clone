import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="index-ticker nifty-ticker">
          <span className="ticker-name">NIFTY 50</span>
          <span className="ticker-val up">23,501.20</span>
          <span className="ticker-change up">+142.50 (+0.61%)</span>
        </div>
        <div className="index-ticker sensex-ticker">
          <span className="ticker-name">SENSEX</span>
          <span className="ticker-val up">77,312.40</span>
          <span className="ticker-change up">+482.10 (+0.63%)</span>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;