import { PrismaClient } from '@prisma/client'
import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from 'react';
import Prismafilter from './prismafilter';

const prisma = new PrismaClient()


export default function Kek(props) {

    const {data} = props.result;

    // console.log(data)

}


export async function getServerSideProps(context) {

    const result = await prisma.easytokens.findMany({
        where: {
          abbrev: {
            search: 'LUS',
          },
        },
      })


      console.log(result)

    return {
      props: {
        
        result,
    
    }, // will be passed to the page component as props
    }
  }