import React from 'react';
function LeftSection({
        imageUrl,
        ProductName,
        productDescription,
        learnMore,
        tryDemo,
        googlePlay,
        appStore 
}) {
    return ( <>
    <div className="container pt-5"><div className="row">
        <div className="col-1"></div>
        <div className="col-6 p-5">
            <img style={{width:"100%"}} src={imageUrl} alt="" />
        </div>
      
        <div className="col-4 p-5 m-auto text-muted">
            <h2 className='fw-bold '>{ProductName}</h2>
            <p>{productDescription}</p>
            <br />
            <a style={{marginRight:"90px"}} href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
            <a href={tryDemo}>try demo <i class="fa-solid fa-arrow-right"></i></a><br /><br />
            <a style={{marginRight:"50px"}} href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="" /></a>
            <a href={appStore}><img src="media\images\appstoreBadge.svg" alt="" /></a>
        </div>
        <div className="col-1"></div>
        </div>
      
        </div>
    </> );
}

export default LeftSection;