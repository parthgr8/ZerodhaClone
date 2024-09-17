import React from 'react';
function RightSection({imageUrl,ProductName,productDescription,bottomLink,linkDescription}) {
    return ( <>
  <div className="container"><div className="row">
        <div className="col-1"></div>
        
        <div className="col-4 p-5 m-auto text-muted">
            <h2 className='fw-bold '>{ProductName}</h2>
            <p>{productDescription}</p>
            <br />
            <a href={bottomLink}>{linkDescription} <i class="fa-solid fa-arrow-right"></i></a>
        
        </div>
        <div className="col-6 px-5">
            <img style={{width:"100%"}} src={imageUrl} alt="" />
        </div>
      
        <div className="col-1"></div>
        </div>  </div>
    </> );
}

export default RightSection;