import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from 'react';




export default function Vestingcheck() {

  // const value = useContext(Context);
  const [check, setCheck] = useState(null);
  const [secheck, setSecheck] = useState(null);
  const [tokencheck, setTokencheck] = useState(null);
  
  
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  
  
  useEffect(() => {
      let testbalance = async() => {

      let tokensame = bsctokendata.filter(function(element) {
        return (element.tokenName == name);
      })
      // console.log(tokensame)
      
      let check1 = tokensame.map((access) => {
        let tokenaddress = access.checkmonth1
        return tokenaddress
    })

      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.whitelistWallets;
        return wlunarush;
      })
        
        let balance = await Promise.all(tokenresult.flat().map(function(element){
          let tokencontractsame = bsctokendata.filter(function(element) {
            return (element.tokenName == name);
          })
          let tokencontract = tokencontractsame.map(function(element){
            let wlunarush = element.tokenAddress;
            return wlunarush;
          })
        let bscbalance = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + tokencontract + '&address=' + element + '&tag=latest&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I'
        return bscbalance;
      }))
      console.log(balance)
      

        
        
        
        const addressbalance = await Promise.all(balance.map(u => fetch(u)))
        console.log(addressbalance)
      try {
        const databal = await Promise.all(addressbalance.map(r => r.json()))
        // console.log(databal)
        setCheck(databal)  
      } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
      }
        setTokencheck(check1)
        
        setSecheck(tokenresult)
      }
      testbalance();
    }, []);
    
    
  const balanceresult = check?.map((p) => {
      return (p.result)
  })

  console.log(balanceresult)

  const arrOfNum = balanceresult?.map(str => {
    return Number(str);
  });


  const sum = arrOfNum?.reduce(function(sum, number) {
    const updatedSum = sum + number;
    return updatedSum;
  }, 0);
  sum; // 12
    console.log(sum)

  return (
    <div style={{ padding: 40 }}>
      <div>
        <h3>{name}</h3>
          {/* {
              check?.map((balance) => {
                  return (
                <li>{(balance.result * 1e-18).toString()}</li>
                  )
              })
          } */}

        <li>{tokencheck}</li>
        <li>{(sum * 1e-18).toString()}</li>

          {/* {
            secheck?.flat().map((balance) => {
                  return (
                <li>{balance}</li>
                  )
              })
          } */}

        {/* {check?.map(function(d){
          return (
          <li>{d.result.map((r) => 
            <span>{r.hash}</span>)}
          </li>
        )
        })} */}
      </div>

    </div>
  );
}