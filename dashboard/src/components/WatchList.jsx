import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const data = {
    labels: filteredWatchlist.map((s) => s.name),
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(56, 126, 209, 0.6)",
          "rgba(236, 94, 62, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(103, 201, 136, 0.6)",
          "rgba(223, 73, 73, 0.6)",
          "rgba(112, 112, 112, 0.6)",
        ],
        borderColor: [
          "#387ed1",
          "#ec5e3e",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(103, 201, 136, 1)",
          "rgba(223, 73, 73, 1)",
          "rgba(112, 112, 112, 1)",
        ],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, gold"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="counts">{filteredWatchlist.length} / 50</span>
      </div>

      <ul className="watchlist-list">
        {filteredWatchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <div className="watchlist-chart-wrapper">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      className="watchlist-item-row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item-details">
        <span className={`stock-symbol ${stock.isDown ? "down" : "up"}`}>
          {stock.name}
        </span>
        <div className="stock-metrics">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down icon-arrow" />
          ) : (
            <KeyboardArrowUp className="up icon-arrow" />
          )}
          <span className="price">{stock.price.toFixed(2)}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = (e) => {
    e.stopPropagation();
    generalContext.openBuyWindow(uid, "BUY");
  };

  const handleSellClick = (e) => {
    e.stopPropagation();
    generalContext.openBuyWindow(uid, "SELL");
  };

  return (
    <div className="watchlist-hover-actions">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="btn-action-buy" onClick={handleBuyClick}>
          B
        </button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="btn-action-sell" onClick={handleSellClick}>
          S
        </button>
      </Tooltip>
      <Tooltip
        title="Chart (C)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="btn-action-icon">
          <BarChartOutlined style={{ fontSize: "16px" }} />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="btn-action-icon">
          <MoreHoriz style={{ fontSize: "16px" }} />
        </button>
      </Tooltip>
    </div>
  );
};