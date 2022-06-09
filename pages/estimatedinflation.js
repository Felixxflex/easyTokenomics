import React, { useEffect, useState } from "react";
import Link from "next/link";
import Balance from "../components/bscscan/balance";
import Transaction from "../components/bscscan/transaction";
import Supply from "../components/bscscan/supply";
import Holder from "../components/bscscan/tokenholder";
import Vestingcheck from "../components/bscscan/vestingcheck";
import Circulating from "../components/coingecko/circulating";
import Uliqu from "../components/coingecko/unreleasedliqu";
import Initialtokens from "../components/static/initialtokens";
import Marketcap from "../components/coingecko/marketcap";
import Month from "../components/static/month";
import NewSupply from "../components/static/newsupply";
import Percent from "../components/static/inflationpercent";
import { useRouter } from "next/router";


export default function TokenGenerator() {

    // function getSessionStorageOrDefault(key, defaultValue) {
    //     const stored = sessionStorage.getItem(key);
    //     if (!stored) {
    //       return defaultValue;
    //     }
    //     return JSON.parse(stored);
    //   }


    const router = useRouter();
    const query = router.query;



        return (
        <>
        <p>
        <Link
          href={{
            pathname: "/token",
            query: query, // the data
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            token generals
          </a>
        </Link>
      </p>
      {/* <p>
        <Link
          href={{
            pathname: "/playtoearn",
            query: query, // the data
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Play To Earn
          </a>
        </Link>
      </p> */}
      <p>
        <Link
          href={{
            pathname: "/search",
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            search
          </a>
        </Link>
      </p>
        <h2>Balance</h2>
          <Balance />
        {/* <h2>Transaction</h2>
          <Transaction /> */}
        <p>Supply</p>
          <Supply />
        {/* <h2>Holder</h2>
          <Holder /> */}
        <p>Circulating</p>
          <Circulating />
        <p>Unreleased Liqu</p>
          <Uliqu />
        <p>Team Tokens</p>
          <Initialtokens />
        <p>Marketcap</p>
          <Marketcap />
        <p>Month</p>
          <Month />
        <p>New Supply</p>
          <NewSupply />
        <p>Inflation %</p>
          <Percent />
        </>

    );
}
