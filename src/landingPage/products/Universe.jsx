import React from 'react';
function Universe() {
    return ( <>
    <div className="container text-center pb-5"><div className="row text-center fw-bold text-muted px-5 mx-5 uni"> <h1 className='py-3'>The Zerodha Universe</h1> <p>Extend your trading and investment experience even further with our partner platforms </p> 
    <div className="col-4 p-5"><a href=""><img style={{width:"160px", height:"5rem",paddingBottom:'30px'}} src="media\images\zerodhaFundhouse.png" alt="" />
    <span className='fs-6 fw-lighter text-muted'><br />our asset management venture
    that is creating simple and transparent index 
    funds to help you save for your goals.</span>
    </a></div>
    <div className="col-4 p-5"><a href=""><img style={{width:"160px", height:"5rem" ,paddingBottom:'30px'}} src="media\images\sensibullLogo.svg" alt="" />
    <span className='fs-6 fw-lighter text-muted'><br />Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</span>
    </a></div>
    <div className="col-4 p-5"><a href=""><img style={{width:"160px", height:"5rem" ,paddingBottom:'30px'}} src="media/images/smallcaseLogo.png" alt="" />
    <span className='fs-6 fw-lighter text-muted'><br />Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</span>
    </a></div>
    <div className="col-4 p-5"><a href=""><img style={{width:"160px", height:"5rem",paddingBottom:'30px'}} src="media\images\streakLogo.png" alt="" />
    <span className='fs-6 fw-lighter text-muted'><br />Systematic trading platform that allows you to create and backtest strategies without coding.</span>
    </a></div>
    <div className="col-4 p-5"><a href=""><img style={{width:"160px", height:"5rem" ,paddingBottom:'30px'}} src="media\images\goldenpiLogo.png" alt="" />
    <span className='fs-6 fw-lighter text-muted'><br />Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</span>
    </a></div>
    <div className="col-4 p-5"><a href=""><img style={{width:"160px", height:"5rem" ,paddingBottom:'30px'}} src="/media/images/dittoLogo.png" alt="" />
    <span className='fs-6 fw-lighter text-muted'><br />Personalized advice on life and health insurance. No spam and no mis-selling..</span>
    </a></div><button style={{width:"20%",margin:"auto"}} className='btn btn-primary fs-5'>Sign Up for free</button>
    </div> </div>
 </> );
}

export default Universe;