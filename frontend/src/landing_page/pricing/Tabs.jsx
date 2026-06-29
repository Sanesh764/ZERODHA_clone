import React, { useState } from "react";
import EquityTable from "./EquityTable";
import CurrencyTable from "./CurrencyTable";
import CommodityTable from "./CommodityTable";

function Tabs() {
  const [active, setActive] = useState("equity");

  return (
    <div className="container mt-5">

      {/* Tab Headings */}
      <div className="d-flex justify-content-center mb-4">
        <h5
          className={`mx-4 ${active === "equity" ? "border-bottom border-primary" : "text-muted"}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("equity")}
        >
          Equity
        </h5>

        <h5
          className={`mx-4 ${active === "currency" ? "border-bottom border-primary" : "text-muted"}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("currency")}
        >
          Currency
        </h5>

        <h5
          className={`mx-4 ${active === "commodity" ? "border-bottom border-primary" : "text-muted"}`}
          style={{ cursor: "pointer" }}
          onClick={() => setActive("commodity")}
        >
          Commodity
        </h5>
      </div>

      {/* Tab Content */}
      {active === "equity" && <EquityTable />}
      {active === "currency" && <CurrencyTable />}
      {active === "commodity" && <CommodityTable />}
    </div>
  );
}

export default Tabs;