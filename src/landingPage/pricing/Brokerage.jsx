import React from 'react';
import OpenAccount from "../OpenAccount"
function Brokrage() {
    return ( <>
   <div className="container p-5 border-bottom"><div className="row px-5 mx-5 text-muted mb-5"><div className="col-4 text-center " style={{}}>
                        <img src="media/images/pricingMF.svg" alt="img not found" style={{width:"15rem"}}/>
                        <h4 className='pb-3 fw-bold'>Free equity delivery</h4>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
                        </div>  
                <div className="col-4 text-center" style={{}}>
                    <img src="media/images/intradayTrades.svg" alt="img not found" style={{width:"15rem"}}/>
                    <h4 className="pb-3 fw-bold">Intraday and F&O trades</h4>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
             </div>
                        <div className="col-4 text-center" style={{}}>
                        <img src="media/images/pricingMF.svg" alt="img not found" style={{width:"15rem"}}/>
                        <h4 className='pb-3 fw-bolder' >Free direct MF</h4>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
             </div></div>
             <OpenAccount/>
             <div className="row p-5 text-muted "><div className="col-8"><a href=""><h3 className="ps-5 ms-5 py-3">Brokrage calculator</h3></a>
             <ul style={{fontSize:'small'}}><li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
             <li>Digital contract notes will be sent via e-mail. </li>
             <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
             <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower). </li>
             <li>or NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
             <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order. </li>
             </ul>
             </div><div className="col-4"><a href=""><h3 className='py-3'>List of charges</h3></a></div></div>
             </div>
    </> );
}

export default Brokrage;