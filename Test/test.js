import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from 'react';
// import Prisma from '/prisma';
import { PrismaClient } from '@prisma/client'



export default function Test(props) {
    
      const router = useRouter();
      const query = router.query;
      const name = query.name;
    

    const data  =  props.tokens;
    

    let tokensame = data.filter(function(element) {
        return (element.tokenName == name);
      })

      console.log(tokensame)

    //   const logo = 'LUS';
    //   useEffect(() => {
        
        //   async function main() {
            //     const findtokens = await prisma.easytokens.findMany({
                //         where: {
                    //           abbrev: {
                        //             search: name,
                        //           },
                        //         },
                        //     })
                        //     console.log(findtokens)
                        //   }
                        
                        //   main()
                        
                        
                        // }, []);
                        
                        return (
    <div>

        {/* <h1>loco</h1>
        <h2>{data.tokenaddress}</h2> */}

    </div>
)

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
