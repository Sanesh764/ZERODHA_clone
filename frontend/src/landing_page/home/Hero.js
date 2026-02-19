import React from "react";

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src='media\homeHero.png'alt="Hero image" className="mb-2"/>
                <h1  className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>sign up for free</button>
            </div>
            <div className="col"></div>
            
        </div>
     );
}

export default Hero;