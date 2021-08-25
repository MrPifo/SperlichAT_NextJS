import Head from 'next/head';
import { useRouter } from 'next/router';
import {executeQuery as db} from '../lib/db';
import React,{ useState, useEffect, useRef } from 'react';
import {Container, Grid, Button, Box, Divider} from '@material-ui/core';
import card from '../styles/projectCard.module.scss';

class Project {
	PRID:number;
	Name:string;
	Autoren?:string;
	BeschreibungKurz?:string;
	BeschreibungLang?:string;
	Kategorie_FK?:number;
	Plattform_FK?:number;
	Aktualisiert?:string;
	Downloads?:number;
	Tags?:string[];

	constructor(id: number, name:string) {
		this.PRID = id;
		this.Name = name;
	}
}
export default function Projects(props: any) {
	let projects:Project[] = props.data.map(e => {
		return <Card name={e.Name} desc={e.BeschreibungKurz} taglist={e.Tags} prid={e.PRID} />
	});
	return (
			<>
			<Head>
				<title>Projects</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
			</Head>
			<body>
				<div id="pageContainer">
					<Grid id="contentWrap">
						{projects}
					</Grid>
				</div>
			</body>
			</>
	);
}

function Card(props:any) {
	const router = useRouter();
	const href = "/projects/" + props.prid;
	const handleClick = (e:any) => {
		e.preventDefault()
		router.push(href)
	}
	console.log(props);
	return (
		<div className={card.card_wrapper} onClick={handleClick}>
			<img className={card.card_image} src={"https://www.sperlich.at/assets/project_pictures/" + props.name.toLowerCase().replace(/ /g,'') + "_preview.png"} />
			<div className={card.card_title}>{props.name}</div>
			<div className={card.card_content} dangerouslySetInnerHTML={{__html:props.desc}}></div>
			<div className={card.card_tags}><TagList tags={props.taglist} /></div>
		</div>
	);
}

function Tag(props:any) {
	return(
		<span className={card.card_tag}>{props.text}</span>
	);
}

function TagList(props:any) {
	let tags:Array<any>;
	tags = props.tags.map(function (value:any) {
		return <Tag text={value} />;
	});

	return(<>{tags}</>);
}

export async function getStaticProps() {
	let data:any = await db('SELECT * FROM Projekte');
	data = JSON.parse(JSON.stringify(data));

	let tags:Array<any>;
	for(let i = 0; i < data.length; i++) {
		let ptags:any = await db("SELECT Name FROM ProjekteTags JOIN Tags ON TID = TAG_FK WHERE PR_FK = " + data[i].PRID + "");
		data[i].Tags = [];
		ptags.forEach((e:any, t:any) => {
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
