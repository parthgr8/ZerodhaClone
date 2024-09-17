import React from 'react';
function Stats() {
    return (  
<>
<dvi className="container">
    <div className="row ">
      <div className="col-1"> </div>
        <div className="col-4 p-5"><h2 className='pb-5'><b>Trust with confidence</b></h2>
      <h3>Customer-first always </h3>
      <p className='pb-3 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India. </p>
      <h3>No spam or gimmicks</h3>
      <p className='pb-3 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>
      <h3>The Zerodha universe</h3>
      <p className='pb-3 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>
      <h3>Do better with money</h3>
      <p className='pb-3  text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>
      </div>
      <div className="col-6 p-5">
        <img src="media/images/ecosystem.png" alt="" style={{width:"90%"}} />
        <div className='text-center'><a className='mx-5' style={{textDecoration:"none"}} href="">Explore our products <i class="fa-sharp fa-solid fa-arrow-right"></i>  </a> <a className='' style={{textDecoration:"none"}} href="">Try Kite Demo <i class="fa-sharp fa-solid fa-arrow-right"></i></a></div>
      </div>
    </div>
</dvi> 
</>
    );
}

export default Stats;