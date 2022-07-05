import React, { useEffect, useState } from "react";
import moment from "moment";
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
//Store data from unreleased liq function
//Store data from Marketcap function
const [coingecko, setCoingecko] = useState(null);

//Store data from InitialTeamTokens function
const [initialcheck, setInitialCheck] = useState(null);

//Store data from verified Blockchain function
const [verifiedblockcheck, setVerifiedblockcheck] = useState(null);

//Store data from verified Blockchain function
const [verifiedteamcheck, setVerifiedteamcheck] = useState(null);

//Store data from project description function
const [descriptioncheck, setDescription] = useState(null);

//Store data from project description function
const [websitecheck, setWebsite] = useState(null);

//Store data from vesting schedule function
const [date, setDate] = useState(null);
const [date2, setDate2] = useState(null);
const [date3, setDate3] = useState(null);
const [date4, setDate4] = useState(null);
const [date5, setDate5] = useState(null);
const [date6, setDate6] = useState(null);
const [date7, setDate7] = useState(null);
const [date8, setDate8] = useState(null);
const [date9, setDate9] = useState(null);
const [date10, setDate10] = useState(null);


  
    const data  =  props.tokens;
    // console.log(data)
  
    
    //balance function with useEffect integration
    useEffect(() => {
        let testbalance = async() => {
  
        let tokensame = data.filter(function(element) {
          return (element.tokenName == name || element.tokenAddress == name);
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
        return (element.tokenName == name || element.tokenAddress == name);
      })
      // console.log(tokensame)
  
      let addressaccess = tokensame.map((access) => {
          let tokenaddress = access.tokenAddress
          return tokenaddress
      })
      // console.log(addressaccess)
  
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
    //Unreleased Liquidity function with useffect function
    //Market Cap function with useffect function
    useEffect(() => {
      let testcirculating = async() => {

      let tokensame = data.filter(function(element) {
        return (element.tokenName == name || element.tokenAddress == name);
      })
      // console.log(tokensame)
      
      let tokenresult = tokensame.map(function(element){
        let wlunarush = element.coingecko;
        return wlunarush;
      })

      const result = await coinGeckoClient.coins.markets({
        ids: tokenresult,
      });
      // console.log(result)


        
      setCoingecko(result)
      }
      testcirculating();
    }, []);


    //Initial Team Tokens function with useffect function

    useEffect(() => {
      let testinitial = async() => {
  
          let tokensame = data.filter(function(element) {
            return (element.tokenName == name || element.tokenAddress == name);
          })
    
          let addressaccess = tokensame.map((access) => {
              let tokenaddress = access.initialtokens
              return tokenaddress
          })
  

  
  
          setInitialCheck(addressaccess)
  
        }
        testinitial();
      }, []);


    //Initial verified Blockchain function with useffect function


      useEffect(() => {
        let testverified = async() => {
    
            let tokensame = data.filter(function(element) {
              return (element.tokenName == name || element.tokenAddress == name);
            })
      
            let addressaccess = tokensame.map((access) => {
                let tokenaddress = access.verifiedblock
                const verifiecation = tokenaddress == true ? "Audited" : "Not Audited";
                return verifiecation
            })

 
            setVerifiedblockcheck(addressaccess)
    
          }
          testverified();
        }, []);
        

        //Initial verified Team function with useffect function

    
      useEffect(() => {
        let testverifiedteam = async() => {
    
            let tokensame = data.filter(function(element) {
              return (element.tokenName == name || element.tokenAddress == name);
            })
      
            let addressaccess = tokensame.map((access) => {
                let tokenaddress = access.verifiedteam
                const verifiecation = tokenaddress == true ? "Verified" : "Not Verified";
                return verifiecation
            })          

            setVerifiedteamcheck(addressaccess)
    
          }
          testverifiedteam();
        }, []);



      //Initial project description function with useffect function

    
      useEffect(() => {
        let testprojectdesc = async() => {
    
            let tokensame = data.filter(function(element) {
              return (element.tokenName == name || element.tokenAddress == name);
            })
      
            let addressaccess = tokensame.map((access) => {
                let tokenaddress = access.projectdesc
                return tokenaddress
            })          

            setDescription(addressaccess)
    
          }
          testprojectdesc();
        }, []);



      //Initial Website Link function with useffect function

    
      useEffect(() => {
        let testwebsitelink = async() => {
    
            let tokensame = data.filter(function(element) {
              return (element.tokenName == name || element.tokenAddress == name);
            })
      
            let addressaccess = tokensame.map((access) => {
                let tokenaddress = access.websitelink
                return tokenaddress
            })          

            setWebsite(addressaccess)
    
          }
          testwebsitelink();
        }, []);



      //Initial vesting schedule function with useffect function

    
      useEffect(() => {
        let testprojectdesc = async() => {
    
            let tokensame = data.filter(function(element) {
              return (element.tokenName == name || element.tokenAddress == name);
            })
      
            let vesting1 = tokensame.map((access) => {
                let today = new Date();
                let tokenaddress = access.vestingone
                const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
                let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
                // console.log(oneDay)

                const date1 = new Date(tokenaddress);
                const date2 = new Date(date);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                // console.log(diffTime + " milliseconds");
                return diffDays + " days until first vesting";
                // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
            })       
            
            
            let vestingdate2 = tokensame.map((access) => {
              let today = new Date();
              let tokenaddress = access.vestingtwo
              const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
              let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
              // console.log(oneDay)

              const date1 = new Date(tokenaddress);
              const date2 = new Date(date);
              const diffTime = Math.abs(date2 - date1);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              // console.log(diffTime + " milliseconds");
              return diffDays + " days until second vesting";
              // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
          })    



          let vestingdate3 = tokensame.map((access) => {
            let today = new Date();
            let tokenaddress = access.vestingthree
            const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
            // console.log(oneDay)

            const date1 = new Date(tokenaddress);
            const date2 = new Date(date);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            // console.log(diffTime + " milliseconds");
            return diffDays + " days until thirt vesting";
            // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
        })   


        let vestingdate4 = tokensame.map((access) => {
          let today = new Date();
          let tokenaddress = access.vestingfour
          const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
          let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
          // console.log(oneDay)

          const date1 = new Date(tokenaddress);
          const date2 = new Date(date);
          const diffTime = Math.abs(date2 - date1);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
          // console.log(diffTime + " milliseconds");
          return diffDays + " days until fourth vesting";
          // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
      })   



      let vestingdate5 = tokensame.map((access) => {
        let today = new Date();
        let tokenaddress = access.vestingfive
        const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
        // console.log(oneDay)

        const date1 = new Date(tokenaddress);
        const date2 = new Date(date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        // console.log(diffTime + " milliseconds");
        return diffDays + " days until fifth vesting";
        // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
    })   



    let vestingdate6 = tokensame.map((access) => {
      let today = new Date();
      let tokenaddress = access.vestingsix
      const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
      // console.log(oneDay)

      const date1 = new Date(tokenaddress);
      const date2 = new Date(date);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      // console.log(diffTime + " milliseconds");
      return diffDays + " days until sixth vesting";
      // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
  })   


  let vestingdate7 = tokensame.map((access) => {
    let today = new Date();
    let tokenaddress = access.vestingseven
    const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
    // console.log(oneDay)

    const date1 = new Date(tokenaddress);
    const date2 = new Date(date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    return diffDays + " days until seventh vesting";
    // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
})   




let vestingdate8 = tokensame.map((access) => {
  let today = new Date();
  let tokenaddress = access.vestingeight
  const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
  // console.log(oneDay)

  const date1 = new Date(tokenaddress);
  const date2 = new Date(date);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  // console.log(diffTime + " milliseconds");
  return diffDays + " days until eight vesting";
  // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
})   




let vestingdate9 = tokensame.map((access) => {
  let today = new Date();
  let tokenaddress = access.vestingnine
  const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
  // console.log(oneDay)

  const date1 = new Date(tokenaddress);
  const date2 = new Date(date);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  // console.log(diffTime + " milliseconds");
  return diffDays + " days until ninth vesting";
  // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
})   




let vestingdate10 = tokensame.map((access) => {
  let today = new Date();
  let tokenaddress = access.vestingten
  const vestingdate = moment(tokenaddress).utc().format('YYYY-MM-DD');
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // console.log(Math.floor((vestingdate - date) / (1000*60*60*24)))
  // console.log(oneDay)

  const date1 = new Date(tokenaddress);
  const date2 = new Date(date);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  // console.log(diffTime + " milliseconds");
  return diffDays + " days until tenth vesting";
  // const diffDays = Math.round(Math.abs((vestingdate - date) / oneDay));
})   


            setDate(vesting1)
            setDate2(vestingdate2)
            setDate3(vestingdate3)
            setDate4(vestingdate4)
            setDate5(vestingdate5)
            setDate6(vestingdate6)
            setDate7(vestingdate7)
            setDate8(vestingdate8)
            setDate9(vestingdate9)
            setDate10(vestingdate10)
    
          }
          testprojectdesc();
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

{coingecko?.data.map(coin => (
          <tr key={coin.id}>
            <th scope="row">
            <p>Circulating Supply</p>
            <li>{coin.circulating_supply}</li>
            </th>
        </tr>
      ))}


 {/*Unreleased Liquidity function (coingecko api)*/}

{coingecko?.data.map(coin => (
          <tr key={coin.id}>
            <th scope="row">
            <p>Unreleased Supply</p>
            <li>{coin.total_supply - coin.circulating_supply}</li>
            </th>
        </tr>
      ))}

 {/*Market Cap function (coingecko api)*/}

{coingecko?.data.map(coin => (
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

{/*Initial Verified Blockchain function (static data)*/}

<h2>verified blockchain</h2>

<h3>{verifiedblockcheck}</h3>

{/*Initial Verified Team function (static data)*/}

<h2>verified Team</h2>

<h3>{verifiedteamcheck}</h3>

{/*Initial Project Description function (static data)*/}

<h2>Project Description</h2>

<h3>{descriptioncheck}</h3>

{/*Initial Website Link function (static data)*/}

<h2>Website Link</h2>

<h3>{websitecheck}</h3>

{/*Initial Vesting Schedule function (static data)*/}

<h2>Vesting Schedule</h2>

<h3>{date}</h3>
<h3>{date2}</h3>
<h3>{date3}</h3>
<h3>{date4}</h3>
<h3>{date5}</h3>
<h3>{date6}</h3>
<h3>{date7}</h3>
<h3>{date8}</h3>
<h3>{date9}</h3>
<h3>{date10}</h3>

        </>

    );

  }


  export async function getServerSideProps() {
    const prisma = new PrismaClient();
    
    const findtokens = await prisma.easytokens.findMany({})
    // console.log(findtokens)



    return {
        props: {
          tokens: JSON.parse(JSON.stringify(findtokens)) ,
        }
    }
}

  

  

