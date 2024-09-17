import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( <>
   <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
  <div class="container">
    <Link class="navbar-brand ps-5" to="/"><img style={{width:"23%"}} src="media\images\logo.svg" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active mx-3  my-1 text-muted" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li class="nav-item"> 
          <Link class="nav-link active mx-3  my-1 text-muted" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-3  my-1 text-muted" aria-current="page" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-3 my-1  text-muted" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-3 my-1  text-muted" aria-current="page" to="/support">Support</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
 
    </> );
}

export default Navbar;