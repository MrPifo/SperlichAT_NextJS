import Head from 'next/head';
import {executeQuery as db} from '../lib/db.js';
import React,{ useState, useEffect, useRef } from 'react';


function DB(props) {
    /*const result = await excuteQuery({
        query: 'SELECT Name FROM Projekte WHERE PRID = 1',
        values: []
    });*/

    return (
        <>
        <Head>
            <title>DB Test</title>
            <meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
		</Head>
        <body>
            <div>{props.data[0].Name}</div>
            <div>{props.data[0].Aktualisiert}</div>
        </body>
        </>
    )
}

export async function getStaticProps() {
    let data = await db({
        query: 'SELECT * FROM Projekte WHERE PRID = 1'
    });
    data = JSON.parse(JSON.stringify(data));
    console.log(data);
    return {
        props:{
            data:data,
        },
        revalidate:10,
    }
}

export default DB