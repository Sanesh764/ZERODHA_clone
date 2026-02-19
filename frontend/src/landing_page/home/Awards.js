import React from 'react';

function Awards(){
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media\largestBroker.svg'/>

                </div>
                <div className='col-6 p-5 mb-5'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ million zerodha clients contibute to over 15% of all retail order valumes in India by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commadity derivatives</p></li>
                            <li><p>Current derivatives</p></li>
                        </div>
                        <div className='col-6'>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                        </div>
                        <img src='media\pressLogos.png'/>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Awards;
