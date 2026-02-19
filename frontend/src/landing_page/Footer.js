import React from "react";

function Footer() {
  return (
    <footer className="bg-light pt-5" style={{ borderTop: "1px solid #ddd" }}>
      <style>{`
        footer a {
          text-decoration: none !important;
          color: #555 !important;
          font-size: 0.875rem;
          line-height: 2;
          transition: color 0.2s;
        }
        footer a:hover {
          color: #387ed1 !important;
        }
        footer h6 {
          color: #222;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        footer .text-muted {
          color: #555 !important;
          font-size: 0.8rem;
          line-height: 1.7;
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 4px;
          color: #333 !important;
          font-size: 1rem;
          margin-right: 8px;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .social-icon:hover {
          color: #387ed1 !important;
        }
        .disclaimer-link {
          color: #387ed1 !important;
          text-decoration: none !important;
        }
        .disclaimer-link:hover {
          text-decoration: underline !important;
        }
        .bottom-links a {
          font-size: 0.8rem;
          color: #555 !important;
        }
      `}</style>

      <div className="container">

        <div className="row">

          {/* Logo + Social Section */}
          <div className="col-md-3 mb-4">
            <img src="media/logo.svg" alt="logo" style={{ width: "150px" }} />
            <p className="mt-3 small text-muted">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Row 1: Twitter/X, Facebook, Instagram, LinkedIn */}
            <div className="d-flex flex-wrap mt-2">
              <a href="https://x.com/@Sanesh847" className="social-icon" title="Twitter/X">
                {/* X icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/14UtPTjhQbR/" className="social-icon" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sanesh847" className="social-icon" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sanesh7644/" className="social-icon" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Row 2: YouTube, WhatsApp, Telegram */}
            <div className="d-flex flex-wrap">
              <a href="https://www.youtube.com/@Sanesh847" className="social-icon" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
              <a href="https://aratt.ai/user/@sanesh_847" className="social-icon" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
              <a href="t.me/sanesh847" className="social-icon" title="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Account */}
          <div className="col-md-2 mb-4">
            <h6>Account</h6>
            <a href="#" className="d-block">Open demat account</a>
            <a href="#" className="d-block">Minor demat account</a>
            <a href="#" className="d-block">NRI demat account</a>
            <a href="#" className="d-block">Commodity</a>
            <a href="#" className="d-block">Dematerialisation</a>
            <a href="#" className="d-block">Fund transfer</a>
            <a href="#" className="d-block">MTF</a>
            <a href="#" className="d-block">Referral program</a>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6>Support</h6>
            <a href="#" className="d-block">Contact us</a>
            <a href="#" className="d-block">Support portal</a>
            <a href="#" className="d-block">How to file a complaint?</a>
            <a href="#" className="d-block">Status of your complaints</a>
            <a href="#" className="d-block">Bulletin</a>
            <a href="#" className="d-block">Circular</a>
            <a href="#" className="d-block">Z-Connect blog</a>
            <a href="#" className="d-block">Downloads</a>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h6>Company</h6>
            <a href="#" className="d-block">About</a>
            <a href="#" className="d-block">Philosophy</a>
            <a href="#" className="d-block">Press & media</a>
            <a href="#" className="d-block">Careers</a>
            <a href="#" className="d-block">Zerodha Cares (CSR)</a>
            <a href="#" className="d-block">Zerodha.tech</a>
            <a href="#" className="d-block">Open source</a>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6>Quick links</h6>
            <a href="#" className="d-block">Upcoming IPOs</a>
            <a href="#" className="d-block">Brokerage charges</a>
            <a href="#" className="d-block">Market holidays</a>
            <a href="#" className="d-block">Economic calendar</a>
            <a href="#" className="d-block">Calculators</a>
            <a href="#" className="d-block">Markets</a>
            <a href="#" className="d-block">Sectors</a>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="row mt-4 border-top pt-4">
          <div className="col small text-muted">

            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For complaints pertaining to securities broking please write to{" "}
              <a href="mailto:complaints@zerodha.com" className="disclaimer-link">complaints@zerodha.com</a>, for DP related to{" "}
              <a href="mailto:dp@zerodha.com" className="disclaimer-link">dp@zerodha.com</a>.
              {" "}Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on <a href="#" className="disclaimer-link">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>

            <p>
              <a href="#" className="disclaimer-link">Smart Online Dispute Resolution</a> |{" "}
              <a href="#" className="disclaimer-link">Grievances Redressal Mechanism</a>
            </p>

            <p>
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE.{" "}
              <a href="#" className="disclaimer-link">NSE broker factsheet</a>
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please{" "}
              <a href="#" className="disclaimer-link">create a ticket here</a>.
            </p>

            <p>
              *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
            </p>

          </div>
        </div>

        {/* Bottom Links */}
        <div className="row border-top pt-3 mt-3 bottom-links">
          <div className="col text-center small">
            <a href="https://www.nseindia.com/" className="mx-2">NSE</a>
            <a href="https://www.bseindia.com/" className="mx-2">BSE</a>
            <a href="https://www.mcxindia.com/" className="mx-2">MCX</a>
            <a href="https://zerodha.com/terms-and-conditions/" className="mx-2">Terms & conditions</a>
            <a href="https://zerodha.com/policies-and-procedures/" className="mx-2">Policies & procedures</a>
            <a href="https://zerodha.com/privacy-policy/" className="mx-2">Privacy policy</a>
            <a href="https://zerodha.com/disclosure/" className="mx-2">Disclosure</a>
            <a href="https://zerodha.com/investor-attention/" className="mx-2">For investor's attention</a>
            <a href="https://zerodha.com/tos/investor-charter/" className="mx-2">Investor charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;