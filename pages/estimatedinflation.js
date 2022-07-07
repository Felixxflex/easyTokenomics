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

//Store data from InitialTeamTokens function
const [monthcheck, setMonthcheck] = useState(null);

//Store data from New Supply function
const [checkone, setCheckone] = useState(null);
const [checktwo, setChecktwo] = useState(null);
const [checkthree, setCheckthree] = useState(null);
const [checkfour, setCheckfour] = useState(null);
const [checkfive, setCheckfive] = useState(null);
const [checksix, setChecksix] = useState(null);

//Store categories from vesting schedule function
const [supply1, setSupply1] = useState(null);
const [supply2, setSupply2] = useState(null);
const [supply3, setSupply3] = useState(null);
const [supply4, setSupply4] = useState(null);
const [supply5, setSupply5] = useState(null);
const [supply6, setSupply6] = useState(null);
const [supply7, setSupply7] = useState(null);
const [supply8, setSupply8] = useState(null);
const [supply9, setSupply9] = useState(null);
const [supply10, setSupply10] = useState(null);
const [supply11, setSupply11] = useState(null);
const [supply12, setSupply12] = useState(null);
const [supply13, setSupply13] = useState(null);
const [supply14, setSupply14] = useState(null);
const [supply15, setSupply15] = useState(null);



    
  
  
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



      //Monthly Releases function with useffect function

      useEffect(() => {
        let testmonth = async() => {
    
            let tokensame = data.filter(function(element) {
              return (element.tokenName == name);
            })
      
            let addressaccess = tokensame.map((access) => {
                let tokenaddress = access.month
                return tokenaddress
            })
    
            // console.log(addressaccess)
    
    
            setMonthcheck(addressaccess)
    
          }
          testmonth();
        }, []);



    //New Supply function with useffect function

    useEffect(() => {
      let testnewsupp = async() => {
  
          let tokensame = data.filter(function(element) {
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
            testnewsupp();
      }, []);



      //Inflation percentage calculator function

      //Initial inflation % function with useffect function


      useEffect(() => {
        let testunqu = async() => {
    
          let tokensame = data.filter(function(element) {
            return (element.tokenName == name || element.tokenAddress == name);
          })
      
            let tge = tokensame.map((access) => {
                let tokenaddress = access.tge
                return tokenaddress
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
            let supplyseven = tokensame.map((access) => {
              let tokenaddress = access.m7
              return tokenaddress
            })
            let supplyeight = tokensame.map((access) => {
              let tokenaddress = access.m8
              return tokenaddress
            })
            let supplynine = tokensame.map((access) => {
              let tokenaddress = access.m9
              return tokenaddress
            })
            let supplyten = tokensame.map((access) => {
              let tokenaddress = access.m10
              return tokenaddress
            })
            let supplyeleven = tokensame.map((access) => {
              let tokenaddress = access.m11
              return tokenaddress
            })
            let supplytwelve = tokensame.map((access) => {
              let tokenaddress = access.m12
              return tokenaddress
            })
            let supplythirteen = tokensame.map((access) => {
              let tokenaddress = access.m13
              return tokenaddress
            })
            let supplyfourteen = tokensame.map((access) => {
              let tokenaddress = access.m14
              return tokenaddress
            })
            let supplyfifteen = tokensame.map((access) => {
              let tokenaddress = access.m15
              return tokenaddress
            })



            const valuecheckseven = supplyseven.every(num => num > 0);
            const valuecheckeight = supplyeight.every(num => num > 0);
            const valuechecknine = supplynine.every(num => num > 0);
            const valuecheckten = supplyten.every(num => num > 0);
            const valuecheckeleven = supplyeleven.every(num => num > 0);
            const valuechecktwelve = supplytwelve.every(num => num > 0);
            const valuecheckthirteen = supplythirteen.every(num => num > 0);
            const valuecheckfourteen = supplyfourteen.every(num => num > 0);
            const valuecheckfifteen = supplyfifteen.every(num => num > 0);

            const numberfilterone = valuecheckseven == false && valuecheckeight == false && valuechecknine == false && valuecheckten == false && valuecheckeleven == false && valuechecktwelve == false && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfiltertwo = valuecheckseven == true && valuecheckeight == false && valuechecknine == false && valuecheckten == false && valuecheckeleven == false && valuechecktwelve == false && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfilterthree = valuecheckseven == true && valuecheckeight == true && valuechecknine == false && valuecheckten == false && valuecheckeleven == false && valuechecktwelve == false && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfilterfour = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == false && valuecheckeleven == false && valuechecktwelve == false && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfilterfive = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == true && valuecheckeleven == false && valuechecktwelve == false && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfiltersix = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == true && valuecheckeleven == true && valuechecktwelve == false && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfilterseven = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == true && valuecheckeleven == true && valuechecktwelve == true && valuecheckthirteen == false && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfiltereight = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == true && valuecheckeleven == true && valuechecktwelve == true && valuecheckthirteen == true && valuecheckfourteen == false && valuecheckfifteen == false;
            const numberfilternine = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == true && valuecheckeleven == true && valuechecktwelve == true && valuecheckthirteen == true && valuecheckfourteen == true && valuecheckfifteen == false;
            const numberfilterten = valuecheckseven == true && valuecheckeight == true && valuechecknine == true && valuecheckten == true && valuecheckeleven == true && valuechecktwelve == true && valuecheckthirteen == true && valuecheckfourteen == true && valuecheckfifteen == true;





            if (numberfilterone == true) {

            // const y = [supplyone =+ supplytwo]
            let r0 = (100 * supplyone) / tge
    
            let arr1 = tge.concat(supplyone)
            let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
            let r1 = (100 * supplytwo) / sum1
    
            let arr2 = supplytwo.push([sum1])
            let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
            let r2 = (100 * supplythree) / sum2
    
            let arr3 = supplythree.push([sum2])
            let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
            let r3 = (100 * supplyfour) / sum3
    
            let arr4 = supplyfour.push([sum3])
            let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
            let r4 = (100 * supplyfive) / sum4
    
            let arr5 = supplyfive.push([sum4])
            let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
            let r5 = (100 * supplysix) / sum5

            setSupply1(r0)
            setSupply2(r1)
            setSupply3(r2)
            setSupply4(r3)
            setSupply5(r4)
            setSupply6(r5)

            } else if (numberfiltertwo == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6
              

              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)


            } else if (numberfilterthree == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)

            } else if (numberfilterfour == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)

            } else if (numberfilterfive == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8

              let arr9 = supplyseven.push([sum8])
              let sum9 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r9 = (100 * supplyten) / sum9


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)
              setSupply10(r9)

            } else if (numberfiltersix == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8

              let arr9 = supplyseven.push([sum8])
              let sum9 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r9 = (100 * supplyten) / sum9

              let arr10 = supplyseven.push([sum8])
              let sum10 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r10 = (100 * supplyeleven) / sum10


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)
              setSupply10(r9)
              setSupply11(r10)

            } else if (numberfilterseven == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8

              let arr9 = supplyseven.push([sum8])
              let sum9 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r9 = (100 * supplyten) / sum9

              let arr10 = supplyseven.push([sum9])
              let sum10 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r10 = (100 * supplyeleven) / sum10

              let arr11 = supplyseven.push([sum10])
              let sum11 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r11 = (100 * supplytwelve) / sum11

              


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)
              setSupply10(r9)
              setSupply11(r10)
              setSupply12(r11)

            } else if (numberfiltereight == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8

              let arr9 = supplyseven.push([sum8])
              let sum9 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r9 = (100 * supplyten) / sum9

              let arr10 = supplyseven.push([sum9])
              let sum10 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r10 = (100 * supplyeleven) / sum10

              let arr11 = supplyseven.push([sum10])
              let sum11 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r11 = (100 * supplytwelve) / sum11

              let arr12 = supplyseven.push([sum11])
              let sum12 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r12 = (100 * supplythirteen) / sum12

              


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)
              setSupply10(r9)
              setSupply11(r10)
              setSupply12(r11)
              setSupply13(r12)

            } else if (numberfilternine == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8

              let arr9 = supplyseven.push([sum8])
              let sum9 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r9 = (100 * supplyten) / sum9

              let arr10 = supplyseven.push([sum9])
              let sum10 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r10 = (100 * supplyeleven) / sum10

              let arr11 = supplyseven.push([sum10])
              let sum11 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r11 = (100 * supplytwelve) / sum11

              let arr12 = supplyseven.push([sum11])
              let sum12 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r12 = (100 * supplythirteen) / sum12

              let arr13 = supplyseven.push([sum12])
              let sum13 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r13 = (100 * supplyfourteen) / sum13

              


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)
              setSupply10(r9)
              setSupply11(r10)
              setSupply12(r11)
              setSupply13(r12)
              setSupply14(r13)

            } else if (numberfilterten == true) {

              let r0 = (100 * supplyone) / tge
    
              let arr1 = tge.concat(supplyone)
              let sum1 = arr1.flat().reduce((a, b) => a + b, 0)
              let r1 = (100 * supplytwo) / sum1
      
              let arr2 = supplytwo.push([sum1])
              let sum2 = supplytwo.flat().reduce((a, b) => a + b, 0)
              let r2 = (100 * supplythree) / sum2
      
              let arr3 = supplythree.push([sum2])
              let sum3 = supplythree.flat().reduce((a, b) => a + b, 0)
              let r3 = (100 * supplyfour) / sum3
      
              let arr4 = supplyfour.push([sum3])
              let sum4 = supplyfour.flat().reduce((a, b) => a + b, 0)
              let r4 = (100 * supplyfive) / sum4
      
              let arr5 = supplyfive.push([sum4])
              let sum5 = supplyfive.flat().reduce((a, b) => a + b, 0)
              let r5 = (100 * supplysix) / sum5

              let arr6 = supplysix.push([sum5])
              let sum6 = supplysix.flat().reduce((a, b) => a + b, 0)
              let r6 = (100 * supplyseven) / sum6

              let arr7 = supplyseven.push([sum6])
              let sum7 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r7 = (100 * supplyeight) / sum7

              let arr8 = supplyseven.push([sum7])
              let sum8 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r8 = (100 * supplynine) / sum8

              let arr9 = supplyseven.push([sum8])
              let sum9 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r9 = (100 * supplyten) / sum9

              let arr10 = supplyseven.push([sum9])
              let sum10 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r10 = (100 * supplyeleven) / sum10

              let arr11 = supplyseven.push([sum10])
              let sum11 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r11 = (100 * supplytwelve) / sum11

              let arr12 = supplyseven.push([sum11])
              let sum12 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r12 = (100 * supplythirteen) / sum12

              let arr13 = supplyseven.push([sum12])
              let sum13 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r13 = (100 * supplyfourteen) / sum13

              let arr14 = supplyseven.push([sum13])
              let sum14 = supplyseven.flat().reduce((a, b) => a + b, 0)
              let r14 = (100 * supplyfifteen) / sum14

              


              setSupply1(r0)
              setSupply2(r1)
              setSupply3(r2)
              setSupply4(r3)
              setSupply5(r4)
              setSupply6(r5)
              setSupply7(r6)
              setSupply8(r7)
              setSupply9(r8)
              setSupply10(r9)
              setSupply11(r10)
              setSupply12(r11)
              setSupply13(r12)
              setSupply14(r13)
              setSupply15(r14)

            } 

          
          // if (numberfilterone == true) {
          // const totalinflation = [supply1 + supply2 + supply3 + supply4 + supply5 + supply6] / 6
          // }


            
        }
        testunqu();
    }, []);
    

      const supplyarray = [supply1, supply2, supply3, supply4, supply5, supply6, supply7, supply8, supply9, supply10, supply11, supply12, supply13, supply14, supply15]
      const tokeninflationresult = []

      // const tokeninflation = supplyarray.filter(item => {
      //   let pushnotnullitems = null;
      //   let pushtoarray = tokeninflationresult.push(pushnotnullitems)
      //   return pushtoarray
      // })

    const mapsupplyarray = supplyarray.map((i) => {
      if (i != null) {
        return tokeninflationresult.push(i)
      } else {
        return " "
      }
    })

    const tokeninflationsum = tokeninflationresult.reduce((partialSum, a) => partialSum + a, 0);

    const tokeninflation = tokeninflationsum / tokeninflationresult.length;


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

{/*Vesting Months function (static data)*/}

{monthcheck?.flat().map(function(d){
    return (
    <li>{d}
    </li>
    )
    })}

{/*Check the new supply function (static data)*/}

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


{/*Initial  function (static data)*/}

<h2>%</h2>

<h3>{supply1}</h3>
<h3>{supply2}</h3>
<h3>{supply3}</h3>
<h3>{supply4}</h3>
<h3>{supply5}</h3>
<h3>{supply6}</h3>
<h3>{supply7}</h3>
<h3>{supply8}</h3>
<h3>{supply9}</h3>
<h3>{supply10}</h3>
<h3>{supply11}</h3>
<h3>{supply12}</h3>
<h3>{supply13}</h3>
<h3>{supply14}</h3>
<h3>{supply15}</h3>



{/* Initial Inflation % function (static data)*/}

<h2>Inflation </h2>

<h3>{tokeninflation + " %"}</h3>


        </>

    );

  }


  export async function getServerSideProps() {
    const prisma = new PrismaClient();
    
    const findtokens = await prisma.easytokens.findMany({})
    console.log(findtokens)


    return {
        props: {
            tokens: JSON.parse(JSON.stringify(findtokens)),
        }
    }
}
