import Head from 'next/head'
import { bsctokendata } from "../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from 'react';




export default function Balance() {

  const [check, setCheck] = useState(null);

  const testwhitelist = ['0x28d155f7892e5e492116850e5ca232df030291a9', '0x594b5983bc47f49e65f98efcfa6bdd0acb169092', '0x0c89c0407775dd89b12918b9c0aa42bf96518820', '0x8cb50bda55b59b58a4831fbc3778c11e63064a2b', '0x97a21614eb924cc7d4127ee195bf8b58a4584708', '0x5786557c078329bd9eebc7c9e51774ee9675f91f', '0x0d0707963952f2fba59dd06f2b425ace40b492fe', '0xcc61daafa1c0f5914858cf1b3e60c6121b8244c1', '0x14d475445a255368d09d66144c049cffc673d6fa', '0xad0ef56b77b94db2317b073d2f806b0a89fd4cda']
  const testcontract = '0xde301D6a2569aEfcFe271B9d98f318BAee1D30a4'

//, '0x57deb7c48f264705bb0bd5cb98de670d0bfe1904', '0x81e0ef68e103ee65002d3cf766240ed1c070334d', '0x415a7F270585277102b352c8Ba4C97EF7Fd30D80'

  useEffect(() => {
    let testbalance = async() => {
    
    let balance = testwhitelist.flat().map(function(element){

    let bscbalance = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + testcontract + '&address=' + element + '&tag=latest&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I'
    return bscbalance;
    
  })

  const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));


    let results = [];
    for (let index = 0; index < balance.length; index++) {
      await delay();
      const res = await fetch(balance[index]);
      console.log(res)
      results.push(res);
    }
    const databal = await results.map(r => r.json())
    console.log(databal)
    setCheck(databal)
  }
  
  
  testbalance();
  
}, []);

console.log(check)
  return (
    <div style={{ padding: 40 }}>
                {
              check?.map((balance) => {
                  return (
                <li>{(balance.result * 1e-18).toString()}</li>
                  )
              })
          }
    </div>
  );
}


