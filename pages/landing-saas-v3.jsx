import background from '../img/landing/saas-3/cta-bg.jpg';
import firstlandingimg from '../img/landing/saas-3/hero/layer01.png'
import secondlandingimg from '../img/landing/saas-3/hero/layer02.png';
import thirdlandingimg from '../img/landing/saas-3/hero/layer03.png';
import newslettersection from '../img/landing/saas-3/cta-bg.jpg';

import brand2 from '../img/brands/02.svg';
import brand3 from '../img/brands/03.svg';
import brand4 from '../img/brands/04.svg';
import brand5 from '../img/brands/05.svg';

import coin1 from '../img/landing/app-showcase/crypto/btc.png';
import coin2 from '../img/landing/app-showcase/crypto/usdt.png';
import coin3 from '../img/landing/app-showcase/crypto/eth.png';
import coin4 from '../img/landing/app-showcase/crypto/dot.png';

import cartvideo from '../img/landing/saas-3/video-cover.png'

import Script from 'next/script';
import dynamic from "next/dynamic";
import '../js/src/components/parallax.js'
import { useState } from 'react'; 
import Link from "next/link";




export default function Search() {
  const [data, setData] = useState({ name: "" });

  return (

<div>
  <meta charSet="utf-8" />
  <title>easyTokenomics | Crypto analysis platform</title>
  {/* SEO Meta Tags */}
  <meta name="description" content="easyTokenomics - Tokenomics analysis for everyone" />
  <meta name="keywords" content="bootstrap, business, creative agency, mobile app showcase, saas, fintech, finance, online courses, software, medical, conference landing, services, e-commerce, shopping cart, multipurpose, shop, ui kit, marketing, seo, landing, blog, portfolio, html5, css3, javascript, gallery, slider, touch, creative" />
  <meta name="author" content="Createx Studio" />
  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Favicon and Touch Icons */}
  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
  <link rel="manifest" href="favicon/site.webmanifest" />
  <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#6366f1" />
  <link rel="shortcut icon" href="favicon/favicon.ico" />
  <meta name="msapplication-TileColor" content="#080032" />
  <meta name="msapplication-config" content="favicon/browserconfig.xml" />
  <meta name="theme-color" content="#ffffff" />
  {/* Vendor Styles */}
  <link rel="stylesheet" media="screen" href="vendor/boxicons/css/boxicons.min.css" />
  <link rel="stylesheet" media="screen" href="vendor/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" media="screen" href="vendor/lightgallery/css/lightgallery-bundle.min.css" />
  {/* Main Theme Styles + Bootstrap */}
  <link rel="stylesheet" media="screen" />
  {/* Page loading styles */}
  <style dangerouslySetInnerHTML={{__html: "\n      .page-loading {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        -webkit-transition: all .4s .2s ease-in-out;\n        transition: all .4s .2s ease-in-out;\n        background-color: #fff;\n        opacity: 0;\n        visibility: hidden;\n        z-index: 9999;\n      }\n      .dark-mode .page-loading {\n        background-color: #0b0f19;\n      }\n      .page-loading.active {\n        opacity: 1;\n        visibility: visible;\n      }\n      .page-loading-inner {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        -webkit-transform: translateY(-50%);\n        transform: translateY(-50%);\n        -webkit-transition: opacity .2s ease-in-out;\n        transition: opacity .2s ease-in-out;\n        opacity: 0;\n      }\n      .page-loading.active > .page-loading-inner {\n        opacity: 1;\n      }\n      .page-loading-inner > span {\n        display: block;\n        font-size: 1rem;\n        font-weight: normal;\n        color: #9397ad;\n      }\n      .dark-mode .page-loading-inner > span {\n        color: #fff;\n        opacity: .6;\n      }\n      .page-spinner {\n        display: inline-block;\n        width: 2.75rem;\n        height: 2.75rem;\n        margin-bottom: .75rem;\n        vertical-align: text-bottom;\n        border: .15em solid #b4b7c9;\n        border-right-color: transparent;\n        border-radius: 50%;\n        -webkit-animation: spinner .75s linear infinite;\n        animation: spinner .75s linear infinite;\n      }\n      .dark-mode .page-spinner {\n        border-color: rgba(255,255,255,.4);\n        border-right-color: transparent;\n      }\n      @-webkit-keyframes spinner {\n        100% {\n          -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n        }\n      }\n      @keyframes spinner {\n        100% {\n          -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n        }\n      }\n    " }} />
  {/* Theme mode */}
  {/* Page loading scripts */}
  {/* Body */}
  {/* Page loading spinner */}

  

  {/* <div id="spinnerhandling" className={this.state.gridIsLoaded ? "page-loading" : "page-loading active"}>
    <div className="page-loading-inner">
      <div className="page-spinner" /><span>Loading...</span>
    </div>
  </div> */}

  
  {/* Page wrapper for sticky footer */}
  {/* Wraps everything except footer to push footer to the bottom of the page if there is little content */}
  <main className="page-wrapper">
    {/* Navbar */}
    {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page */}
    <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
      <div className="container px-3">
        <a href="index.html" className="navbar-brand pe-3">
          {/* <img src="" width={47} alt="easyTokenomics" /> */}
          
        </a>
        <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
          <div className="offcanvas-header border-bottom border-light">
            <h5 className="offcanvas-title text-white">Menu</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About us</a>
                <div className="dropdown-menu dropdown-menu-dark">
                  <div className="d-lg-flex pt-lg-3">
                    <div className="mega-dropdown-column">
                      <h6 className="text-light px-3 mb-2">Our Company</h6>
                      <ul className="list-unstyled mb-3">
                        <li><a href="about-v1.html" className="dropdown-item py-1">Our Mission</a></li>
                      </ul>
                      <h6 className="text-light px-3 mb-2">Blog</h6>
                      <ul className="list-unstyled mb-3">
                        <li><a href="blog-list-with-sidebar.html" className="dropdown-item py-1">List View with Sidebar</a></li>
                        <li><a href="blog-grid-with-sidebar.html" className="dropdown-item py-1">Grid View with Sidebar</a></li>
                        <li><a href="blog-list-no-sidebar.html" className="dropdown-item py-1">List View no Sidebar</a></li>
                        <li><a href="blog-grid-no-sidebar.html" className="dropdown-item py-1">Grid View no Sidebar</a></li>
                        <li><a href="blog-simple-feed.html" className="dropdown-item py-1">Simple Feed</a></li>
                        <li><a href="blog-single.html" className="dropdown-item py-1">Single Post</a></li>
                        <li><a href="blog-podcast.html" className="dropdown-item py-1">Podcast</a></li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column">
                      <h6 className="text-light px-3 mb-2">Portfolio</h6>
                      <ul className="list-unstyled mb-3">
                        <li><a href="portfolio-grid.html" className="dropdown-item py-1">Grid View</a></li>
                        <li><a href="portfolio-list.html" className="dropdown-item py-1">List View</a></li>
                        <li><a href="portfolio-slider.html" className="dropdown-item py-1">Slider View</a></li>
                        <li><a href="portfolio-courses.html" className="dropdown-item py-1">Courses</a></li>
                        <li><a href="portfolio-single-project.html" className="dropdown-item py-1">Single Project</a></li>
                        <li><a href="portfolio-single-course.html" className="dropdown-item py-1">Single Course</a></li>
                      </ul>
                      <h6 className="text-light px-3 mb-2">Services</h6>
                      <ul className="list-unstyled mb-3">
                        <li><a href="services-v1.html" className="dropdown-item py-1">Services v.1</a></li>
                        <li><a href="services-v2.html" className="dropdown-item py-1">Services v.2</a></li>
                        <li><a href="services-single-v1.html" className="dropdown-item py-1">Service Details v.1</a></li>
                        <li><a href="services-single-v2.html" className="dropdown-item py-1">Service Details v.2</a></li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column">
                      <h6 className="text-light px-3 mb-2">Pricing</h6>
                      <ul className="list-unstyled mb-3">
                        <li><a href="pricing.html" className="dropdown-item py-1">Pricing Page</a></li>
                      </ul>
                      <h6 className="text-light px-3 mb-2">Contacts</h6>
                      <ul className="list-unstyled mb-3">
                        <li><a href="contacts-v1.html" className="dropdown-item py-1">Contacts v.1</a></li>
                        <li><a href="contacts-v2.html" className="dropdown-item py-1">Contacts v.2</a></li>
                        <li><a href="contacts-v3.html" className="dropdown-item py-1">Contacts v.3</a></li>
                      </ul>
                      <h6 className="text-light px-3 mb-2">Specialty</h6>
                      <ul className="list-unstyled">
                        <li><a href="404-v1.html" className="dropdown-item py-1">404 Error v.1</a></li>
                        <li><a href="404-v2.html" className="dropdown-item py-1">404 Error v.2</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Account</a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a href="account-details.html" className="dropdown-item">Account Details</a></li>
                  <li><a href="account-security.html" className="dropdown-item">Security</a></li>
                  <li><a href="account-notifications.html" className="dropdown-item">Notifications</a></li>
                  <li><a href="account-messages.html" className="dropdown-item">Messages</a></li>
                  <li><a href="account-saved-items.html" className="dropdown-item">Saved Items</a></li>
                  <li><a href="account-collections.html" className="dropdown-item">My Collections</a></li>
                  <li><a href="account-payment.html" className="dropdown-item">Payment Details</a></li>
                  <li><a href="account-signin.html" className="dropdown-item">Sign In</a></li>
                  <li><a href="account-signup.html" className="dropdown-item">Sign Up</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="components/typography.html" className="nav-link">UI Kit</a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">Docs</a>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top border-light">
            <a href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/" className="btn btn-primary w-100" target="_blank" rel="noopener">
              <i className="bx bx-cart fs-4 lh-1 me-1" />
              &nbsp; Products
            </a>
          </div>      
        </div>
        {/* <div className="dark-mode pe-lg-1 ms-auto me-4">
          <div className="form-check form-switch mode-switch" data-bs-toggle="mode">
            <input type="checkbox" className="form-check-input" id="theme-mode" />
            <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Light</label>
            <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Dark</label>
          </div>
        </div> */}
        <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/" className="btn btn-outline-primary btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noopener">
          <i className="bx bx-cart fs-5 lh-1 me-1" />
          &nbsp;Sign in
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a href="https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank" rel="noopener">
          <i className="bx bx-cart fs-5 lh-1 me-1" />
          &nbsp;Sign up
        </a>
      </div>
    </header>
    {/* Hero */}
    <section className="dark-mode bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4" style={{backgroundImage: `url(${background.src})`}}>
      <div className="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5">
        <div className="row pt-3 pb-2 py-md-4">
          {/* Text */}
          <div className="col-xl-5 col-md-6 pt-lg-5 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-3 pb-2 pb-sm-3">Invest easy & fast with easyTokenomics</h1>
            <p className="fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">Start understanding the economics of your crypto investments. Over <strong>1000+</strong> tokenomics analysis of the newest crypto projects.</p>
            <div className="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0">
            <div class="input-group">
              <input type="search" class="form-control rounded"  aria-label="Search" aria-describedby="search-addon" placeholder="Enter a Token Name or Address" value={data.name}
                           onChange={(event) =>
                             setData({
                               name: event.target.value,
                             })
                           }
                required/>
                <Link href={{ pathname: "/token",
                             query: data, // the data
                           }}>
              <button type="button" id="searchcrypto" class="btn btn-primary">search</button>
                </Link> 
            </div>
            </div>
          </div>
          {/* Parallax gfx */}
          <div className="col-xl-7 col-md-6 d-md-flex justify-content-end">
            <div className="parallax mx-auto ms-md-0 me-md-n5" style={{maxWidth: 675}}>
              <div className="parallax-layer zindex-2" data-depth="0.1">
                <img src={firstlandingimg.src} alt="Card" />
              </div>
              <div className="parallax-layer zindex-3" data-depth="0.25">
                <img src={secondlandingimg.src} alt="Bubble" />
              </div>
              <div className="parallax-layer" data-depth="-0.15">
                <img src={thirdlandingimg.src} alt="Bubble" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Brands (carousel on screens < 1100px) */}
    <section className="container border-bottom-lg pt-sm-2">
        <div className="row">
          {/* Item */}
          <div className="py-2 col-sm-12">
          </div>
          {/* Item */}
          <div className=" py-2 col-sm-3">
            <a href="#" className="px-2 mx-2">
              <img src={brand2.src} className="d-block mx-auto my-2" width={155} alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className=" py-2 col-sm-3">
            <a href="#" className="px-2 mx-2">
              <img src={brand3.src} className="d-block mx-auto my-2" width={155} alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="py-2 col-sm-3">
            <a href="#" className="px-2 mx-2">
              <img src={brand4.src} className="d-block mx-auto my-2" width={155} alt="Brand" />
            </a>
          </div>
          {/* Item */}
          <div className="py-2 col-sm-3">
            <a href="#" className="px-2 mx-2">
              <img src={brand5.src} className="d-block mx-auto my-2" width={155} alt="Brand" />
            </a>
          </div>
          </div>
        {/* Pagination (bullets) */}
        <div className="swiper-pagination position-relative pt-3" />
    </section>

    
{/* Stats */}
<section className="dark-mode bg-dark position-relative pt-5 pb-4 py-md-5">
  <div className="position-absolute top-0 start-0 w-100 h-100 bg-white" />
  <div className="container position-relative zindex-3 py-lg-4 pt-md-2 py-xl-5 mb-lg-4">
    {/* Title */}
    <div className="row justify-content-center text-center pb-4 mb-2">
      <div className="col-xl-6 pt-2">
        <h2 className="h1 mb-4">Token with the lowest inflation</h2>
        <p className="fs-lg mb-0">These tokens have had the lowest inflation within this month.</p>
      </div>
    </div>
    {/* Table */}
    <div className="d-sm-flex flex-wrap d-lg-table w-100">
      {/* Row */}
      <div className="d-lg-table-row w-sm-50 w-lg-100 pe-sm-3 pe-lg-0 mb-3 mb-lg-0">
        <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
          <div className="d-flex align-items-center">
            <img src={coin1.src} width={32} alt="Bitcoin" />
            <div className="ps-3">
              <h3 className="h4 mb-0" id="landingnames">Bitcoin<span className="d-inlin-block opacity-60 ps-2 ms-1">BTC</span></h3>
            </div>
          </div>
        </div>
        <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">$38,940.63</div>
        <div className="d-lg-table-cell align-middle fs-lg text-success border-bottom py-3 py-lg-4">+1.70%</div>
        <div className="d-lg-table-cell align-middle fs-lg text-black border-bottom py-3 py-lg-4">$736,124,602,670.97</div>
        <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
          <img src="" width={108} alt="BTC graph" />
        </div>
        <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
          <button type="button" id="cryptobutton" className="btn btn-sm btn-outline-black fs-sm w-100 w-lg-auto">See Facts</button>
        </div>
      </div>
      {/* Row */}
      <div className="d-lg-table-row w-sm-50 w-lg-100 ps-sm-3 ps-lg-0 mb-3 mb-lg-0">
        <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
          <div className="d-flex align-items-center">
            <img src={coin2.src} width={32} alt="Tether" />
            <div className="ps-3">
              <h3 className="h4 mb-0">Tether<span className="d-inlin-block opacity-60 ps-2 ms-1">USDT</span></h3>
            </div>
          </div>
        </div>
        <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">$15.09</div>
        <div className="d-lg-table-cell align-middle fs-lg text-danger border-bottom py-3 py-lg-4">-0.27%</div>
        <div className="d-lg-table-cell align-middle fs-lg text-black border-bottom py-3 py-lg-4">$14,735,584,883.68</div>
        <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
          <img src="" width={108} alt="USDT graph" />
        </div>
        <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
          <button type="button" id="cryptobutton" className="btn btn-sm btn-outline-black fs-sm w-100 w-lg-auto">See Facts</button>
        </div>
      </div>
      {/* Row */}
      <div className="d-lg-table-row w-sm-50 w-lg-100 pe-sm-3 pe-lg-0 mb-3 mb-lg-0">
        <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
          <div className="d-flex align-items-center">
            <img src={coin3.src}  width={32} alt="Ethereum" />
            <div className="ps-3">
              <h3 className="h4 mb-0">Ethereum<span className="d-inlin-block opacity-60 ps-2 ms-1">ETH</span></h3>
            </div>
          </div>
        </div>
        <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">$2,829.07</div>
        <div className="d-lg-table-cell align-middle fs-lg text-success border-bottom py-3 py-lg-4">+1.27%</div>
        <div className="d-lg-table-cell align-middle fs-lg text-black border-bottom py-3 py-lg-4">$337,863,906,048.53</div>
        <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
          <img src="" width={108} alt="ETH graph" />
        </div>
        <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
          <button type="button" id="cryptobutton" className="btn btn-sm btn-outline-black fs-sm w-100 w-lg-auto">See Facts</button>
        </div>
      </div>
      {/* Row */}
      <div className="d-lg-table-row w-sm-50 w-lg-100 ps-sm-3 ps-lg-0 mb-3 mb-lg-0">
        <div className="d-lg-table-cell align-middle border-bottom py-3 py-lg-4">
          <div className="d-flex align-items-center">
            <img src={coin4.src} width={32} alt="Polkadot" />
            <div className="ps-3">
              <h3 className="h4 mb-0">Polkadot<span className="d-inlin-block opacity-60 ps-2 ms-1">DOT</span></h3>
            </div>
          </div>
        </div>
        <div className="d-lg-table-cell align-middle h4 border-bottom py-3 py-lg-4 mb-0">$13.28</div>
        <div className="d-lg-table-cell align-middle fs-lg text-danger border-bottom py-3 py-lg-4">-1.35%</div>
        <div className="d-lg-table-cell align-middle fs-lg text-black border-bottom py-3 py-lg-4">$26,143,724,006.81</div>
        <div className="d-lg-table-cell align-middle border-bottom-lg py-3 py-lg-4">
          <img src="" width={108} alt="DOT graph" />
        </div>
        <div className="d-lg-table-cell align-middle border-bottom-lg text-lg-end pt-2 pb-3 py-lg-4">
          <button type="button" id="cryptobutton" className="btn btn-sm btn-outline-black fs-sm w-100 w-lg-auto">See Facts</button>
        </div>
      </div>
    </div>
  </div>
</section>



{/* How it works (Steps + Video) */}
<section className="container">
      <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto" style={{maxWidth: 530}}>
        <h2 className="h1">How Does It Work?</h2>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat mollis egestas nam luctus facilisis ultrices</p>
      </div>
      {/* Steps */}
      <div className="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3">
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Search</h3>
            <p className="mb-0">Click on the searchbar and insert your token's address or the name.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Tokenomics analysis</h3>
            <p className="mb-0">Now you have full access to your tokenomics analysis like inflation, vesting, future sell pressure and much more...</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Blog</h3>
            <p className="mb-0">In the case that you are new to tokenomics look at our video or blog posts to understand the analsis.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body">
            <h3 className="h4 mb-3">Subscribe</h3>
            <p className="mb-0">If you want important news according to your token like inflation warnings or upcoming vestings, subscribe to our Newsletter or Telegram channel.</p>
          </div>
        </div>
      </div>
      {/* Video */}
      <div className="bg-secondary position-relative rounded-3 overflow-hidden px-4 px-sm-5">
        <div className="position-absolute top-50 start-50 w-75 h-75 translate-middle d-flex align-items-center justify-content-center zindex-5">
          <a href="https://www.youtube.com/watch?v=wODsNtortYw" className="btn btn-video btn-icon btn-xl bg-white stretched-link" data-bs-toggle="video">
            <i className="bx bx-play" />
          </a>
        </div>
        <div className="pt-4 mt-sm-3 px-3 px-sm-5 mx-md-5">
          <img src={cartvideo.src} width={786} className="rellax d-block mx-auto mt-lg-4" alt="Card" data-rellax-percentage="0.5" data-rellax-speed="1.1" data-disable-parallax-down="lg" />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="newslettersection" className="container">
      <div className="dark-mode bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0" style={{backgroundImage: `url(${newslettersection.src})`}} >
        <div className="row position-relative zindex-2 py-5 my-1 my-md-3">
          <div className="col-md-6">
            <div className="mx-auto" style={{maxWidth: 440}}>
              <h2 id="newsletterheader" className="h1 pb-1 pb-md-3 pb-lg-4">Let's start your investing easier now!</h2>
              <ul className="list-unstyled fs-lg d-md-none pb-3">
                <li className="d-flex mb-2">
                  <i className="bx bx-check lead text-primary me-2" style={{marginTop: '.125rem'}} />
                  Purus vestibulum pharetra amet tincidunt pretium
                </li>
                <li className="d-flex mb-2">
                  <i className="bx bx-check lead text-primary me-2" style={{marginTop: '.125rem'}} />
                  Haretra justo magna pharetra dui gravida sed nec
                </li>
                <li className="d-flex">
                  <i className="bx bx-check lead text-primary me-2" style={{marginTop: '.125rem'}} />
                  Venenatis risus faucibus volutpat amet feugiat a
                </li>
              </ul>
              <a href="#" className="btn btn-lg btn-primary shadow-primary w-100 w-sm-auto">Start trial now</a>
            </div>
          </div>
          <div className="col-md-6 pt-lg-3 pt-xl-4">
            <ul className="list-unstyled fs-lg d-none d-md-block">
              <li className="d-flex mb-2">
                <i className="bx bx-check lead text-primary me-2" style={{marginTop: '.125rem'}} />
                Purus vestibulum pharetra amet tincidunt pretium
              </li>
              <li className="d-flex mb-2">
                <i className="bx bx-check lead text-primary me-2" style={{marginTop: '.125rem'}} />
                Haretra justo magna pharetra dui gravida sed nec
              </li>
              <li className="d-flex">
                <i className="bx bx-check lead text-primary me-2" style={{marginTop: '.125rem'}} />
                Venenatis risus faucibus volutpat amet feugiat a
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer */}
  <footer className="footer pt-5 pb-4 pb-lg-5">
    <div className="container pt-lg-4">
      <div className="row pb-5">
        <div className="col-lg-4 col-md-6">
          <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
            <img src="img/logo.svg" width={47} alt="Silicon" />
            Silicon
          </div>
          <p className="fs-sm pb-lg-3 mb-4">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.</p>
          <form className="needs-validation" noValidate>
            <label htmlFor="subscr-email" className="form-label">Subscribe to our newsletter</label>
            <div className="input-group">
              <input type="email" id="subscr-email" className="form-control rounded-start ps-5" placeholder="Your email" required />
              <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5" />
              <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
          <div id="footer-links" className="row">
            <div className="col-lg-4">
              <h6 className="mb-2">
                <a href="#useful-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Useful Links</a>
              </h6>
              <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                <ul className="nav flex-column pb-lg-1 mb-lg-3">
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Features</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Integrations</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Our Clients</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Blog</a></li>
                </ul>
                <ul className="nav flex-column mb-2 mb-lg-0">
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Terms &amp; Conditions</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3">
              <h6 className="mb-2">
                <a href="#social-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Socials</a>
              </h6>
              <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                <ul className="nav flex-column mb-2 mb-lg-0">
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Twitter</a></li>
                  <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
              <h6 className="mb-2">Contact Us</h6>
              <a href="mailto:email@example.com" className="fw-medium">easytokenomics@webfix.com</a>
            </div>
          </div>
        </div>
      </div>
      <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
        © All rights reserved. Made by 
        <a className="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a>
      </p>
    </div>
  </footer>
  {/* Back to top button */}
  <a href="#top" className="btn-scroll-top" data-scroll>
    <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
    <i className="btn-scroll-top-icon bx bx-chevron-up" />
  </a>
  {/* Vendor Scripts */}
  {/* Main Theme Script */}
</div>

);
}