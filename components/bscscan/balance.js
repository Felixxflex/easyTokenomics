import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from 'react';




export default function Balance() {

  // const value = useContext(Context);
  const [check, setCheck] = useState(null);
  const [secheck, setSecheck] = useState(null);
  
  
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
        let wlunarush = element.whitelistWallets;
        return wlunarush;
      })
        
        let balance = await tokenresult.flat().map(function(element){
          let tokencontractsame = bsctokendata.filter(function(element) {
            return (element.tokenName == name);
          })
          let tokencontract = tokencontractsame.map(function(element){
            let wlunarush = element.tokenAddress;
            return wlunarush;
          })
        let bscbalance = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + tokencontract + '&address=' + element + '&tag=latest&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I'
        return bscbalance;
        // }, 2000*index )
      })
        
      console.log(balance)
      
      
      const addressbalance = await Promise.all(balance.map(u => fetch(u)))
      const databal = await Promise.all(addressbalance.map(r => r.json()))

      setCheck(databal)  


      // try {
        // console.log(databal)
      // } catch (err) {
        // 👇️ This runs
      //   console.log('Error: ', err.message);
      // }

        
        setSecheck(tokenresult)
      }
      testbalance();
    }, []);
    
    
  const balanceresult = check?.map((p) => {
      return (p.result)
  })


  
  const arrOfNum = balanceresult?.map(str => {
    return Number(str);
  });

    console.log(balanceresult)

  const sum = arrOfNum?.reduce(function(sum, number) {
    const updatedSum = sum + number;
    return updatedSum;
  }, 0);
  sum; 

  return (
    <div style={{ padding: 40 }}>
      <div>
        <h3>{name}</h3>

        <p>Wallet balances</p>
          {
              check?.map((balance) => {
                  return (
                <li>{(balance.result * 1e-18).toString()}</li>
                  )
              })
          }

        <p>Sum of balances</p>
          <li>{sum * 1e-18}</li>
        

          <p>Addresses</p>
        {
            secheck?.flat().map((balance) => {
                  return (
                <li>{balance}</li>
                  )
              })
          }

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