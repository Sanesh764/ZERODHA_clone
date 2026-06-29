
import React from "react";
import Awards from "./Awards";
import Eductaion from "./Education";
import OpenAccount from "../OpenAccount";
import Stats from "./Stats";
import Hero from "./Hero";
import Pricing from "./Pricing";

function HomePage() {
    return ( 
        <>

        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Eductaion/>
        <OpenAccount/>

        </>
     );
}

export default HomePage;