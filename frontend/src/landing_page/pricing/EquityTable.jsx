function EquityTable() {
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Equity Delivery</th>
            <th>Equity Intraday</th>
            <th>F&O - Futures</th>
            <th>F&O - Options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Brokerage</th>
            <td>Zero Brokerage</td>
            <td>0.03% or ₹20/executed order whichever is lower</td>
            <td>0.03% or ₹20/executed order whichever is lower</td>
            <td>Flat ₹20 per executed order</td>
          </tr>

          <tr>
            <th>STT/CTT</th>
            <td>0.1% on buy & sell</td>
            <td>0.025% on sell side</td>
            <td>0.02% on sell side</td>
            <td>
              0.125% of intrinsic value (on exercised options)
              <br />
              0.1% on sell side (on premium)
            </td>
          </tr>

          <tr>
            <th>Transaction Charges</th>
            <td>
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00297% <br />
              BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00173% <br />
              BSE: 0
            </td>
            <td>
              NSE: 0.03503% (on premium) <br />
              BSE: 0.0325% (on premium)
            </td>
          </tr>

          <tr>
            <th>GST</th>
            <td colSpan="4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>

          <tr>
            <th>SEBI Charges</th>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>

          <tr>
            <th>Stamp Charges</th>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center mt-3">
        <a href="https://zerodha.com/brokerage-calculator#tab-equities" style={{textDecoration:"none"}}>Calculate your costs upfront using our brokerage calculator</a>
      </div>
    </div>
  );
}

export default EquityTable;