import Link from "next/link";
import React, { useEffect, useState } from "react";




export default function Search() {
  // this data will be passed to /some-page via the Link component
  const [data, setData] = useState({ name: "" });



  return (
    <div style={{ padding: 40 }}>

<div className="searchh1">
  <h3>
    Tokenomics analysis of more than 1000 Crypto Projects
  </h3>
</div>

<div id="cover">
<form method="get" action="">
  <div class="tb">
    <div class="td">
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
    </div>
    <div class="td" id="s-cover">
    <Link
          href={{
            pathname: "/token",
            query: data, // the data
          }}
        >
        <a style={{ color: "blue", textDecoration: "underline" }}>
      <button type="submit">
        <div id="s-circle"></div>
        <span></span>
      </button>
      </a>
    </Link>
    </div>
  </div>
</form>
</div>
</div>
  );
}