function CommodityTable() {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Commodity Futures</th>
            <th>Commodity Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Brokerage</th>
            <td>0.03% or ₹20/executed order whichever is lower</td>
            <td>₹20/executed order</td>
          </tr>
          <tr>
            <th>STT/CTT</th>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell side</td>
          </tr>
          <tr>
            <th>Transaction charges</th>
            <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
            <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
          </tr>
          <tr>
            <th>GST</th>
            <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
          </tr>
          <tr>
            <th>SEBI charges</th>
            <td>Agri: ₹1/crore <br /> Non-Agri: ₹10/crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <th>Stamp charges</th>
            <td>0.002% or ₹200/crore on buy side</td>
            <td>0.003% or ₹300/crore on buy side</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center mt-3">
        <a href="https://zerodha.com/brokerage-calculator#tab-equities" style={{textDecoration:"none"}}>Calculate your costs upfront using our brokerage calculator</a>
      </div>
    </div>
  );
}

export default CommodityTable;