import React from "react";

const Apps = () => {
  const appsData = [
    {
      name: "Console",
      desc: "The backoffice platform for your trade book, analytics, portfolio tracking, and reports.",
      logo: "https://zerodha.com/static/images/products-console.png",
      url: "#",
    },
    {
      name: "Coin",
      desc: "Buy direct mutual funds online with zero commission, delivered straight to your Demat account.",
      logo: "https://zerodha.com/static/images/products-coin.png",
      url: "#",
    },
    {
      name: "Kite Connect",
      desc: "Build full-fledged trading platforms or automate your trading algorithms using our REST APIs.",
      logo: "https://zerodha.com/static/images/products-kiteconnect.png",
      url: "#",
    },
    {
      name: "Varsity",
      desc: "A comprehensive educational program to learn stock markets, trading, and personal finance.",
      logo: "https://zerodha.com/static/images/varsity-logo.png",
      url: "#",
    },
    {
      name: "Sentinel",
      desc: "Create real-time price alerts on stocks, indices, and commodities in the cloud.",
      logo: "https://zerodha.com/static/images/products-sentinel.png",
      url: "#",
    },
  ];

  return (
    <div className="apps-page">
      <div className="section-title">
        <h2>Ecosystem Apps</h2>
        <p>A collection of applications integrated into your Kite trading platform</p>
      </div>

      <div className="apps-grid">
        {appsData.map((app, idx) => (
          <div key={idx} className="app-card">
            <div className="app-icon-wrapper">
              {app.logo ? (
                <img src={app.logo} alt={app.name} className="app-logo-img" />
              ) : (
                <div className="app-logo-placeholder">{app.name[0]}</div>
              )}
            </div>
            <h3>{app.name}</h3>
            <p>{app.desc}</p>
            <a href={app.url} className="app-cta-link">
              Launch App <span className="arrow-icon">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
