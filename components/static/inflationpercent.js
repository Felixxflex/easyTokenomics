import Head from 'next/head'
import { bsctokendata } from "../../pages/bscdatanew/data";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";



export default function Percent() {
    
//  const mycontext = useAppContext();

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

        // let m1 = () => {
        //     let inflm1 = (100 * supplytwo) / supplyone;
        //     return inflm1
        // }

        // let m2 = () => {
        //     let inflm1 = supplyone + supplytwo;
        //     let inflm2 = (100 * supplytwo) / inflm1;
        //     return inflm2
        // }
      


        // let m3 = () => {
        //     let inflm1 = (100 * supplyfour) / supplythree;
        //     return inflm1
        // }

        // let m4 = () => {
        //     let inflm1 = (100 * supplyfive) / supplyfour;
        //     return inflm1
        // }

        // let m5 = () => {
        //     let inflm1 = (100 * supplysix) / supplyfive;
        //     return inflm1
        // }

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

        // let sum2 = sum1.reduce((a, b) => a + b, 0)
        // let r2 = (100 * supplyfour) / sum2
        
        // setCheckone(m1())
        // setChecktwo(m2())
        // setCheckthree(m3())
        // setCheckfour(m4())
        // setCheckfive(m5())
        
        setCheckone(r0)
        setChecktwo(r1)
        setCheckthree(r2)
        setCheckfour(r3)
        setCheckfive(r4)
        setChecksix(r5)
        
    }
    testunqu();
}, []);

//need to count all the values to divide to do it dynamic
const totalinflation = [checkone + checktwo + checkthree + checkfour + checkfive + checksix] /6



return (
    <div style={{ padding: 40 }}>
      <div>

    <li>{checkone} </li>
    <li>{checktwo} </li>
    <li>{checkthree} </li>
    <li>{checkfour} </li>
    <li>{checkfive} </li>
    <li>{checksix} </li>
    <h3>Total Inflation</h3>
    <li>{totalinflation}</li>
      </div>

    </div>
  );
}