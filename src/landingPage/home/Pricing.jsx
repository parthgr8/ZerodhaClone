import React from 'react';
function Pricing() {
    return (
        <div className="col text-center ">
            <div className="row ">
                <div className="col-1"></div>
                <div className="col-4">
                    <h2>Unbeatable pricing</h2>
                    <p className='text-muted'> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <div><a href="" style={{ textDecoration: "none" }}>See pricing <i class="fa-sharp fa-solid fa-arrow-right"></i></a></div>
                </div>
              
                <div className="col-6"><div className="row"><div className="col-4 " style={{display:"flex"}}>
                        <div style={{width:"30%"}}><img src="media/images/pricingMF.svg" alt="img not found" style={{width:"7rem"}}/></div>
             <div className='text-muted ps-3' style={{margin:"15px"}}> Free account <br />   
                  opening</div> 
</div>
                <div className="col-4" style={{display:"flex"}}>
                        <div style={{width:"30%"}}><img src="media/images/pricingMF.svg" alt="img not found" style={{width:"7rem"}}/></div>
             <div className='text-muted' style={{margin:"15px"}}> Free equity delivery<br />   
                        and direct mutual funds</div> </div>
                        <div className="col-4" style={{display:"flex"}}>
                        <div style={{width:"30%"}}> <img src="media/images/intradayTrades.svg" alt="" style={{width:"7rem"}}/> </div>
             <div className='text-muted ps-3' style={{margin:"15px"}}> Intraday and<br />   
             F&O</div> </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Pricing;