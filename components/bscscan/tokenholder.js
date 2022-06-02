import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//API Pro endpoint not accessable
export default function Holder() {


  const [check, setCheck] = useState(null);

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
        let wlunarush = element.tokenAddress;
        return wlunarush;
      })
        
        let tokenholder = await Promise.all(tokenresult.flat().map(function(element){
          
        let bscholder = 'https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress=' + element + '&page=1&offset=10&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I'
            
        return bscholder;
      }))
              
        

      try {
        const addresscirculating = await Promise.all(tokenholder.map(u => fetch(u)))
        const databal = await Promise.all(addresscirculating.map(r => r.json()))
        console.log(databal)
        setCheck(databal)  
      } catch (err) {
        // 👇️ This runs
        console.log('Error: ', err.message);
      }

        
      }
      testholder();
    }, []);
    

    

  return (
    <div style={{ padding: 40 }}>
      <h1>SomePage</h1>
      <div>
        <h3>{name}</h3>
          {
              check?.map((circulating) => {
                  return (
                <li>{(circulating.result * 1e-18).toString()}</li>
                  )
              })
          }


      </div>

    </div>
  );
}