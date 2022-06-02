import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Initialtokens() {


  const [check, setCheck] = useState(null);

  
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  
  useEffect(() => {
    let testunqu = async() => {

        let tokensame = bsctokendata.filter(function(element) {
          return (element.tokenName == name);
        })
  
        let addressaccess = tokensame.map((access) => {
            let tokenaddress = access.initialtokens
            return tokenaddress
        })

        console.log(addressaccess)


    setCheck(addressaccess)

      }
      testunqu();
    }, []);
    

    

  return (
    <div style={{ padding: 40 }}>
      <div>
      {check?.flat().map(function(d){
    return (
    <li>{d?.map((r) => 
    <span>{r}</span>)}
    </li>
    )
    })}
      </div>

    </div>
  );
}