import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Supply() {


  const [check, setCheck] = useState(null);
  const [secheck, setSecheck] = useState(null);

  
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  
  useEffect(() => {
      let testsupply = async() => {

      let tokensame = bsctokendata.filter(function(element) {
        return (element.tokenName == name);
      })
      console.log(tokensame)

      let addressaccess = tokensame.map((access) => {
          let tokenaddress = access.tokenAddress
          return tokenaddress
      })
      console.log(addressaccess)

      let contractmap = await addressaccess.map((contract) => {
          let address = 'https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=' + contract + '&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I'
          return address
      })

    const addresscont = await Promise.all(contractmap.map(u => fetch(u)))
    // console.log(addresscont)
    const datacont = await Promise.all(addresscont.map(r => r.json()))
    setCheck(datacont)

      }
      testsupply();
    }, []);
    

    

  return (
    <div style={{ padding: 40 }}>
      <div>
        <h3>{name}</h3>
          {
              check?.map((supply) => {
                  return (
                <li>{(supply.result * 1e-18).toString()}</li>
                  )
              })
          }

      </div>

    </div>
  );
}