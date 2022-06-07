import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//API Pro endpoint not accessable
export default function Distribution() {


  const [check, setCheck] = useState(null);
  const [checksec, setChecksec] = useState(null);
  const [checktre, setChecktre] = useState(null);


  const router = useRouter();
  const query = router.query;
  const name = query.name;

  
  
  useEffect(() => {
      let testholder = async() => {

      let tokensame = bsctokendata.filter(function(element) {
        return (element.tokenName == name);
      })
      // console.log(tokensame)
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.distribution;
        return wlunarush;
      })

      let total = tokensame.map(function(element){
        let wlunarush = element.distributiontotal;
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
        

      try {
        const address = await Promise.all(balance.map(u => fetch(u)))
        const databal = await Promise.all(address.map(r => r.json()))
        // console.log(databal)
        setCheck(databal)  
      } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
      }

        setChecksec(tokenresult)
        setChecktre(total)
      }
      testholder();
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

    

  return (
    <div style={{ padding: 40 }}>
      <div>
          <p>Rewards wallets with balance</p>
          {
              check?.map((wallet) => {
                  return (
                <li>{(wallet.result * 1e-18).toString()}</li>
                  )
              })
          }

        <p>Rewards remaining</p>
        <li>{sum * 1e-18}</li>

        {checksec?.map((address) => {
          return (
            <li>{address}</li>
          )
        })}

        <li>{checktre}</li>

        <p>Rewards spend</p>

        <li>{checktre - (sum * 1e-18)}</li>
      </div>

    </div>
  );
}