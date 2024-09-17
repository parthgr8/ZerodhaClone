import React from 'react';
function Hero() {
    return ( <>
   <div className="container-fluid text-bg-primary "><div className="row px-5 mx-5 py-5"><div className="col-6 px-5 support"><a className='p-5' href=""><h4 style={{color:"white"}}>Support portal</h4></a>
   <h4 className='py-3'>Search for an answer or browse help topics to create a ticket</h4  >
   <div class="input-group input-group-lg py-3">
  <input type="text" class="form-control fs-6 py-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Eg: how do i activate F & O and why is my order getting rejected....' />  <span class="input-group-text" id="inputGroup-sizing-lg "><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
</div>
   <a style={{color:"white", paddingRight:'10px'}} href=""> Track account openeing | </a><a style={{color:"white" ,   paddingRight:'10px'}} href=""> Track segment activation | </a><a style={{color:"white",paddingRight:'10px'}} href=""> Intraday margins |</a> <br /><a style={{color:"white"}} href="">Kite user manual | </a>
   </div>
   <div className="col-6 text-light support"><a href=""><h5 className='p-4 text-end text-light' >Track tickets </h5></a>
   <h4>Featured</h4>
   <ul><li className='py-3 support'><a  className='text-light' href="">Surveillance measure on scrips - September 2024 </a>
   </li>
   <li className='support'><a  className='text-light py-3' href="">Latest Intraday leverages and Square-off timings 
   </a></li></ul>
   </div>
   </div></div>
    </> );
}

export default Hero;