import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Balance() {
  const [check, setCheck] = useState(null);

  const router = useRouter();
  const query = router.query;
  const name = query.name;

  
  
  useEffect(() => {
      let testtransaction = async() => {

      let tokensame = bsctokendata.filter(function(element) {
        return (element.tokenName == name);
      })
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.whitelistWallets;
        return wlunarush;
      })
      let transaction = await Promise.all(tokenresult.flat().map(function(element){

        let tokencontractsame = bsctokendata.filter(function(element) {
          return (element.tokenName == name);
        })
        let tokencontract = tokencontractsame.map(function(element){
          let wlunarush = element.tokenAddress;
          return wlunarush;
        })
      
        let bsctransaction = 'https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=' + tokencontract + '&address=' + element + '&page=1&startblock=0&offset=1&endblock=999999999&sort=asc&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I';
        
        return bsctransaction;
      }))
      // console.log(tokenresult)
      
      const addressbalance = await Promise.all(transaction.map(u => fetch(u)))
      const datatrans = await Promise.all(addressbalance.map(r => r.json()))
      console.log(datatrans)
      setCheck(datatrans)  
    }
    testtransaction();
  }, []);





// console.log(tokendisplay) 


  return (
    <div style={{ padding: 40 }}>
      <h2>
      {check?.map(function(d){
    return (
    <li>{d.result.map((r) => 
    <span>{r.hash}</span>)}
    </li>
    )
    })}
      </h2>

    </div>
  );
}
