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
import Distribution from "../components/bscscan/rewardswallets";


export default function TokenGenerator() {




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
      <p>
        <Link
          href={{
            pathname: "/estimatedinflation",
            query: query, // the data
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Estimated Inflation
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
        <h2>P2E Balance</h2>
          <Distribution /> 
        



        </>

    );
}
