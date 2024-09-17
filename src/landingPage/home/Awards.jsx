import React from 'react';
function Awards() {
    return ( 
     <>
     <div className='container p-5'>
        <div className='row'>
            <div className='col-6'><img src="media/images/largestBroker.svg" alt="" /></div>
            <div className='col-6'><h2 className='p-3'>Largest stock broker in india</h2>
            <p>2+ million clients have been connected to us and contribute to about 15% of all volume in india daily by trading
                and investing in: </p>
               <div className="row"><div className="col-6"><ul className='py-4'><li>Futures and Options</li>
                <li className='py-3'>commodities derivatives</li>
                <li>current derivatives</li>
                </ul></div><div className="col-6"><ul className='py-4'><li>stocks</li>
                <li className='py-3'>Direct mutual funds</li>
                <li>bonds and fgo</li></ul></div>
                <img src="media/images/pressLogos.png" alt="" /></div> 
        </div></div>
     </div>
     </>
     );
}

export default Awards;