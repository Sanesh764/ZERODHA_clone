function ChargesExplained() {
  return (
    <div className="container mt-5 mb-5">
      <h3>Charges explained</h3>

      <div className="row mt-4">

        <div className="col-md-6">
          <h5>Securities/Commodities transaction tax</h5>
          <p>Tax charged by government on buy and sell transactions.</p>

          <h5>Transaction/Turnover Charges</h5>
          <p>Charged by exchanges (NSE, BSE, MCX).</p>

          <h5>Call & trade</h5>
          <p>₹50 per order placed through dealer.</p>

          <h5>Stamp charges</h5>
          <p>Government stamp duty as per Indian Stamp Act.</p>
        </div>

        <div className="col-md-6">
          <h5>GST</h5>
          <p>18% on (brokerage + SEBI + transaction charges)</p>

          <h5>SEBI Charges</h5>
          <p>₹10 per crore + GST.</p>

          <h5>DP Charges</h5>
          <p>₹15.34 per scrip when selling stocks.</p>

          <h5>Pledging charges</h5>
          <p>₹30 + GST per pledge request.</p>
        </div>

      </div>
    </div>
  );
}

export default ChargesExplained;