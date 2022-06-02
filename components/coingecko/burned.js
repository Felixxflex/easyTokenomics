import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CoinGecko from 'coingecko-api';


const coinGeckoClient = new CoinGecko();




export default function Burned() {
  
  
  const [check, setCheck] = useState(null);
  
  
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  
  
  useEffect(() => {
      let testbalance = async() => {

      let tokensame = bsctokendata.filter(function(element) {
        return (element.tokenName == name);
      })
      // console.log(tokensame)
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.coingecko;
        return wlunarush;
      })

      const result = await coinGeckoClient.coins.markets({
        ids: tokenresult,
      });
      console.log(result)


        
        setCheck(result)
      }
      testbalance();
    }, []);
    


  return (
    <div style={{ padding: 40 }}>
      <div>
      {check?.data.map(coin => (
          <tr key={coin.id}>
            <th scope="row">
            <p>Unreleased Supply</p>
            <li>{coin.max_supply - coin.total_supply}</li>
            </th>
        </tr>
      ))}

      </div>

    </div>
  );
}