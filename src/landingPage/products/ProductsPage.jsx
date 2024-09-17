import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer';
function ProductsPage() {
    return ( <>
  
    <Hero/>
    <LeftSection imageUrl="media\images\kite.png"
        ProductName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "
        learnMore=""
        tryDemo=""
        googlePlay=""
        appStore=" " />
    <RightSection imageUrl="media\images\console.png" 
    ProductName="Console"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
    linkDescription="Learn more"
    />
    <LeftSection imageUrl="media\images\coin.png"
        ProductName="Coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.  "
        learnMore=""
        tryDemo=""
        googlePlay=""
        appStore=" " /> 
        <RightSection imageUrl="media\images\console.png" 
    ProductName="Kite Connect API"
    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.  "
    linkDescription="Kite Connect "/>
        <LeftSection imageUrl="media\images\varsity.png"
        ProductName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore=""
        tryDemo=""
        googlePlay=""
        appStore=" " />
          <div className='text-center p-5 text-muted'><h4>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech </a>blog.</h4></div>
    <Universe/>
  
    </> );
}

export default ProductsPage;