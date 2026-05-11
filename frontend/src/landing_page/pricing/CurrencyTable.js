function CurrencyTable() {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Currency Futures</th>
            <th>Currency Options</th>
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
            <td>No STT</td>
            <td>No STT</td>
          </tr>
          <tr>
            <th>Transaction charges</th>
            <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
            <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
          </tr>
          <tr>
            <th>GST</th>
            <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
          </tr>
          <tr>
            <th>SEBI charges</th>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <th>Stamp charges</th>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center mt-3">
        <a href="https://zerodha.com/brokerage-calculator#tab-equities" style={{textDecoration:"none"}}>Calculate your costs upfront using our brokerage calculator</a>
      </div>
    </div>
  );
}

export default CurrencyTable;