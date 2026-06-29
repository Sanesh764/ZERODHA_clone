
import React, { useState } from "react";
import teamMembers from "./TeamData";

function Team() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">

      {/* ====== PEOPLE HEADING ====== */}
      <div className="row border-top pt-5 mb-5">
        <h1 className="text-center">People</h1>
      </div>

      {/* ====== FOUNDER SECTION ====== */}
      <div className="row align-items-center mb-5">

        {/* Left Image */}
        <div className="col-md-5 text-center">
          <img
            src="media/sanesh.jpg"
            alt="sanesh kumar"
            className="img-fluid rounded-circle"
            style={{ width: "65%" }}
          />
          <h4 className="mt-4">sanesh kumar</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Right Bio */}
        <div className="col-md-7 text-muted" style={{ lineHeight: "1.8" }}>
          <p>
            sanesh bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">Homepage</a> /{" "}
            <a href="#" className="text-decoration-none">TradingQnA</a> /{" "}
            <a href="#" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>

      {/* ====== TEAM GRID SECTION ====== */}
      <div className="row text-center mt-5">
 
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-5" key={index}>

            <img
              src={member.img}
              alt={member.name}
              className="img-fluid rounded-circle"
              style={{ width: "60%", cursor: "pointer" }}
              onClick={() => handleClick(index)}
            />

            <h5 className="mt-3">{member.name}</h5>
            <p className="text-muted">{member.role}</p>

            {openIndex === index && (
              <p className="mt-3 text-muted" style={{ fontSize: "0.95em" }}>
                {member.bio}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default Team;

