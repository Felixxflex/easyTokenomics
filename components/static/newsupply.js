import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function NewSupply() {


  const [checkone, setCheckone] = useState(null);
  const [checktwo, setChecktwo] = useState(null);
  const [checkthree, setCheckthree] = useState(null);
  const [checkfour, setCheckfour] = useState(null);
  const [checkfive, setCheckfive] = useState(null);
  const [checksix, setChecksix] = useState(null);

  
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  
  useEffect(() => {
    let testunqu = async() => {

        let tokensame = bsctokendata.filter(function(element) {
          return (element.tokenName == name);
        })
  
        let supplyone = tokensame.map((access) => {
            let tokenaddress = access.m1
            return tokenaddress
        })

        let supplytwo = tokensame.map((access) => {
            let tokenaddress = access.m2
            return tokenaddress
        })
        let supplythree = tokensame.map((access) => {
            let tokenaddress = access.m3
            return tokenaddress
        })
        let supplyfour = tokensame.map((access) => {
            let tokenaddress = access.m4
            return tokenaddress
        })
        let supplyfive = tokensame.map((access) => {
            let tokenaddress = access.m5
            return tokenaddress
        })
        let supplysix = tokensame.map((access) => {
            let tokenaddress = access.m6
            return tokenaddress

        })


    setCheckone(supplyone)
    setChecktwo(supplytwo)
    setCheckthree(supplythree)
    setCheckfour(supplyfour)
    setCheckfive(supplyfive)
    setChecksix(supplysix)
      }
      testunqu();
    }, []);
    

    

  return (
    <div style={{ padding: 40 }}>
      <div>
      {checkone?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}
          {checktwo?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}
          {checkthree?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}
          {checkfour?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}
          {checkfive?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}
          {checksix?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}

      </div>

    </div>
  );
}