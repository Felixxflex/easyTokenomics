import Link from "next/link";
import React, { useEffect, useState } from "react";




export default function Search() {
  // this data will be passed to /some-page via the Link component
  const [data, setData] = useState({ name: "" });



  return (
    <div style={{ padding: 40 }}>


      {/* Navbar from Bootstrap*/}
      {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-5-strong">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand" href="#">easyTokenomics</a>

    {/* <!-- Toggle button --> */}
    {/* <button className="navbar-toggler" data-toggle="collapse" data-bs-target="#collapseExample">
      <span class="navbar-toggler-icon"></span>
    </button> */}

<button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      {/* <!-- Left links --> */}
      <ul class="navbar-nav mb-2 ms-auto  mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Featured Tokens</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login / Register</a>
        </li>
        {/* <!-- Navbar dropdown --> */}
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}







<div className="searchh1">
  <h3>
    Tokenomics analysis of more than 1000 Crypto Projects
  </h3>
</div>

{/* <div id="cover">
<form method="get" action="">
  <div class="tb">
    <div class="td"> */}
    <input
          type="text"
          placeholder="Enter a Token"
          value={data.name}
          onChange={(event) =>
            setData({
              name: event.target.value,
            })
          }
        required/>
    {/* </div>
    <div class="td" id="s-cover"> */}
    <Link
          href={{
            pathname: "/token",
            query: data, // the data
          }}
        >   </Link>
        {/* <a style={{ color: "blue", textDecoration: "underline" }}>
      <button type="submit">
        <div id="s-circle"></div>
        <span></span>
      </button>
      </a>
    </Link>
    </div>
  </div>
</form>
</div> */}
</div>
  );
}