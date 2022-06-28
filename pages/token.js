import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PrismaClient } from '@prisma/client'
import CoinGecko from 'coingecko-api';


const coinGeckoClient = new CoinGecko();


export default function TokenGenerator(props) {



//Store data from balance function
const [check, setCheck] = useState(null);
const [secheck, setSecheck] = useState(null);

//Store data from supply function
const [supplycheck, setSupplycheck] = useState(null);

//Store data from circulating supply function
const [circulatingcheck, setCirculatingcheck] = useState(null);

//Store data from unreleased liq function
const [unreliqcheck, setUnreliqheck] = useState(null);

//Store data from Marketcap function
const [mcapcheck, setMcapheck] = useState(null);

//Store data from InitialTeamTokens function
const [initialcheck, setInitialheck] = useState(null);

    
  
  
    const data  =  props.tokens;
    console.log(data)
  
    
    //balance function with useEffect integration
    useEffect(() => {
        let testbalance = async() => {
  
        let tokensame = data.filter(function(element) {
          return (element.tokenName == name);
        })
        // console.log(tokensame)
  
        
        let tokenresult = tokensame.map(function(element){
          let wlunarush = element.whitelistWallets;
          return wlunarush;
        })
          
          let balance = await tokenresult.flat().map(function(element){
            let tokencontractsame = data.filter(function(element) {
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
          
        // console.log(balance)
        
        
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


    //Supply function with useffect function

    useEffect(() => {
      let testsupply = async() => {
  
      let tokensame = data.filter(function(element) {
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
    setSupplycheck(datacont)
  
      }
      testsupply();
    }, []);
      

    //Circulating function with useffect function
    useEffect(() => {
      let testcirculating = async() => {

      let tokensame = data.filter(function(element) {
        return (element.tokenName == name);
      })
      // console.log(tokensame)
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.coingecko;
        return wlunarush;
      })

      const result = await coinGeckoClient.coins.markets({
        ids: tokenresult,
      });
      console.log(result)


        
      setCirculatingcheck(result)
      }
      testcirculating();
    }, []);


    
    //Unreleased Liquidity function with useffect function
    useEffect(() => {
      let testunreliq = async() => {

      let tokensame = data.filter(function(element) {
        return (element.tokenName == name);
      })
      // console.log(tokensame)
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.coingecko;
        return wlunarush;
      })

      const result = await coinGeckoClient.coins.markets({
        ids: tokenresult,
      });
      console.log(result)


        
      setUnreliqheck(result)
      }
      testunreliq();
    }, []);


    //Market Cap function with useffect function

    useEffect(() => {
      let testmcap = async() => {

      let tokensame = data.filter(function(element) {
        return (element.tokenName == name);
      })
      // console.log(tokensame)
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.coingecko;
        return wlunarush;
      })

      const result = await coinGeckoClient.coins.markets({
        ids: tokenresult,
      });


        
      setMcapheck(result)
      }
      testmcap();
    }, []);


    //Initial Team Tokens function with useffect function

    useEffect(() => {
      let testinitial = async() => {
  
          let tokensame = data.filter(function(element) {
            return (element.tokenName == name);
          })
    
          let addressaccess = tokensame.map((access) => {
              let tokenaddress = access.initialtokens
              return tokenaddress
          })
  

  
  
          setInitialheck(addressaccess)
  
        }
        testinitial();
      }, []);



    //Balance action 
      
    const balanceresult = check?.map((p) => {
        return (p.result)
    })
  
  
    
    const arrOfNum = balanceresult?.map(str => {
      return Number(str);
    });
  
      // console.log(balanceresult)
  
    const sum = arrOfNum?.reduce(function(sum, number) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);
    sum; 
  


  //Router
  const router = useRouter();
  const query = router.query;
  const name = query.name;

        
        return (
        <>


        <p>
        <Link
          href={{
            pathname: "/estimatedinflation",
            query: query, // the data
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            inflation
          </a>
        </Link>
      </p>
      {/* <p>
        <Link
          href={{
            pathname: "/playtoearn",
            query: query, // the data
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Play To Earn
          </a>
        </Link>
      </p> */}
      <p>
        <Link
          href={{
            pathname: "/",
          }}
        >
          <a style={{ color: "blue", textDecoration: "underline" }}>
            search
          </a>
        </Link>
        </p>




        {/*Balance function (bscscan api)*/}

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



    {/*Supply function (bscscan api)*/}

{
  supplycheck?.map((supply) => {
       return (
    <li>{(supply.result * 1e-18).toString()}</li>
         )
     })
 }

    {/*Supply function (coingecko api)*/}

{circulatingcheck?.data.map(coin => (
          <tr key={coin.id}>
            <th scope="row">
            <p>Circulating Supply</p>
            <li>{coin.circulating_supply}</li>
            </th>
        </tr>
      ))}


 {/*Unreleased Liquidity function (coingecko api)*/}

{unreliqcheck?.data.map(coin => (
          <tr key={coin.id}>
            <th scope="row">
            <p>Unreleased Supply</p>
            <li>{coin.total_supply - coin.circulating_supply}</li>
            </th>
        </tr>
      ))}

 {/*Market Cap function (coingecko api)*/}

{mcapcheck?.data.map(coin => (
          <tr key={coin.id}>
            <th scope="row">
            <p>Marketcap</p>
            <li>{coin.market_cap}</li>
            </th>
        </tr>
      ))}
   
{/*Initial Team Tokens function (static data)*/}

{initialcheck?.flat().map(function(d){
    return (
    <li>{d?.map((r) => 
    <span>{r}</span>)}
    </li>
    )
    })}


        </>

    );

  }


  export async function getServerSideProps() {
    const prisma = new PrismaClient();
    
    const findtokens = await prisma.easytokens.findMany({})
    console.log(findtokens)


    return {
        props: {
            tokens: findtokens,
        }
    }
}

  

  

