import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { bsctokendata } from "../pages/bscdatanew/data";
import React from "react";
import TokenGenerator from '../pages/token';

export default function Home(props) {


  const databalone = props.addressbalance;
  const datatransone  =  props.addresstransaction;

// console.log(databalone)

  return  (
    
    <ul>      

      <h1 class="searchh1" >Address One</h1>
      {databalone.map((balance) => {
        return (
      <li>{(balance.result * 1e-18).toString()}</li>
      )})}
      <div>
      <h1>Address Two</h1>
      <div>
      {datatransone.map(function(d){
         return (
         <li>{d.result.map((r) => 
         <span>{r.from}</span>)}</li>
         )
       })}
       <h1>Address Three</h1>
        {datatransone.map(function(d){
         return (
         <li>{d.result.map((r) => 
         <span>{r.hash}</span>)}</li>
         )
       })}
      </div>
      </div>


    </ul>
  );
}



export async function getServerSideProps(context) {
  
  // function getapitoken() {
    // useEffect(() => {

    const testoken = 'Genopets';
    // console.log(testoken)



    // const newtoken = 'Genopets';


    let tokensame = bsctokendata.filter(function(element) {
      return (element.tokenName == testoken);
    })
    let tokenresult = tokensame.map(function(element){
      let wlunarush = element.whitelistWallets;
      return wlunarush;
    })

    
    let balance = await Promise.all(tokenresult.flat().map(function(element){
      
      let bscbalance = 'https://api-testnet.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x0DBfd812Db3c979a80522A3e9296f9a4cc1f5045&address=' + element + '&tag=latest&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I';
      
      return bscbalance;
    }))
    
    let transaction = await Promise.all(tokenresult.flat().map(function(element){
      
      let bsctransaction = 'https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractaddress=0x0DBfd812Db3c979a80522A3e9296f9a4cc1f5045&address=' + element + '&page=1&startblock=0&offset=1&endblock=999999999&sort=asc&apikey=E2JAJX6MAGAZUHSYIBZIEMKMNW9NZKPR7I';
      
      return bsctransaction;
    }))
    
    // console.log(transaction)
    const addressbalance = await Promise.all(balance.map(u => fetch(u)))
    const addresstransaction = await Promise.all(transaction.map(e => fetch(e)))
    
    
    return {
      props: {
        addressbalance:  await Promise.all(addressbalance.map(r => r.json())),
        addresstransaction:  await Promise.all(addresstransaction.map(p => p.json())),
      }
    };
    // }
    
  }
  
  
  