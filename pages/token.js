import React, { useEffect, useState } from "react";
import Link from "next/link";
import Balance from "../components/bscscan/balance";
import Transaction from "../components/bscscan/transaction";
import Supply from "../components/bscscan/supply";
import Holder from "../components/bscscan/tokenholder";
import Circulating from "../components/coingecko/circulating";
import Uliqu from "../components/coingecko/unreleasedliqu";
import Initialtokens from "../components/static/initialtokens";
import Marketcap from "../components/coingecko/marketcap";
import { useRouter } from "next/router";


export default function TokenGenerator() {


  const router = useRouter();
  const query = router.query;




        
        return (
        <>
        <p>
        <Link
          href={{
            pathname: "/estimatedinflation",
            query: query, // the data
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            inflation
          </a>
        </Link>
      </p>
      <p>
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
      </p>
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
        {/* <h2>Supply</h2>
          <Supply /> */}
        {/* <h2>Holder</h2>
          <Holder /> */}
        {/* <h2>Circulating</h2>
          <Circulating />
        <h2>Unreleased Liqu</h2>
          <Uliqu />
        <h2>Team Tokens</h2>
          <Initialtokens />
        <h2>Marketcap</h2>
          <Marketcap /> */}

        </>

    );
}

