import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from 'next/image'

import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";



export default function Search() {
    // this data will be passed to /some-page via the Link component
    const [data, setData] = useState({ name: "" });

    { /* <!-- Theme mode --> */ }

    // let mode = window.localStorage.getItem('mode'),
    // root = document.getElementsByTagName('html')[0];
    // if (mode !== null && mode === 'dark') {
    // root.classList.add('dark-mode');
    // } else {
    // root.classList.remove('dark-mode');
    // }


    return (








        {
            /* <div className="searchh1">
                   <h3 className="searchtitle">
                     Tokenomics analysis of more than 1000 Crypto Projects
                   </h3>
                 </div>

                             <input
                           type="text"
                           placeholder="Enter a Token"
                           class="search-input"
                           value={data.name}
                           onChange={(event) =>
                             setData({
                               name: event.target.value,
                             })
                           }
                         required/>
                             <Link
                           href={{
                             pathname: "/token",
                             query: data, // the data
                           }}
                         > </Link> 
                           {/* <a class="search-icon">
                                 <i class="fa fa-search">
                                 <FontAwesomeIcon
                         icon={faMagnifyingGlass}
                         style={{ fontSize: 100, color: "blue" }}
                       />
                                 </i>
                             </a> */
        }

    );
}