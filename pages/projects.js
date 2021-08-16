import Head from 'next/head';
import {executeQuery as db} from '../lib/db.js';
import React,{ useState, useEffect, useRef } from 'react';
import card from '../styles/projectCard.module.scss';

export default function Projects(props) {
    console.log("### Data ###");
    console.log(props.data);
    let projects = props.data.map(e => {
        return <Card name={e.Name} desc={e.BeschreibungKurz} taglist={e.Tags} />
    })

    return (
        <>
        <Head>
            <title>Projects</title>
            <meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
		</Head>
        <body>
            <div id="pageContainer">
				<div id="contentWrap">
                    {projects}
                </div>
            </div>
        </body>
        </>
    )
}

function Card(props) {
    return (
        <div class={card.card_wrapper}>
            <img class={card.card_image} src={"https://www.sperlich.at/assets/project_pictures/" + props.name.toLowerCase().replace(/ /g,'') + "_preview.png"} onclick='RedirectProject(`$link`)' />
            <div class={card.card_title}>{props.name}</div>
            <div class={card.card_content} dangerouslySetInnerHTML={{__html:props.desc}}></div>
            <div class={card.card_tags}><TagList tags={props.taglist} /></div>
        </div>
    )
}

function Tag(props) {
    return(
        <span class={card.card_tag}>{props.text}</span>
    )
}

function TagList(props) {
    let tags = props.tags.map(e => {
        return <Tag text={e} />
    });
    return(
        <>
        {tags}
        </>
    );
}

export async function getStaticProps() {
    let data = await db({
        query: 'SELECT * FROM Projekte'
    });
    console.log(data);
    data = JSON.parse(JSON.stringify(data));
    console.log("Loaded Projects: " + data.length);

    let tags = [];
    for(let i = 0; i < data.length; i++) {
        let ptags = await db({
            query: "SELECT Name FROM ProjekteTags JOIN Tags ON TID = TAG_FK WHERE PR_FK = " + data[i].PRID + ""
        });
        data[i].Tags = [];
        ptags.forEach((e, t) => {
            data[i].Tags[t] = e.Name;
        })
        
    }
    
    return {
        props:{
            data:data,
        },
        revalidate:10,
    }
}