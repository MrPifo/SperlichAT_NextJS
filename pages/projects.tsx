import Head from 'next/head';
import { useRouter } from 'next/router';
import {executeQuery as db} from '../lib/db';
import React,{ useState, useEffect, useRef } from 'react';
import {Container, Grid, Button, Box, Divider} from '@material-ui/core';
import card from '../styles/projectCard.module.scss';
import projectCss from '../styles/projects.module.scss';


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
				<div id="pageShadow"></div>
				<Grid id={projectCss.projectGrid} spacing={0} container direction="row" justifyContent="space-evenly" alignItems="center">
					{projects}
				</Grid>
			</body>
			</>
	);
}

function Card(props:any) {
	const router = useRouter();
	const href = "/projects/" + props.prid;
	const handleClick = () => {
		router.push(href)
	}
	
	return (
		<div className={card.card_wrapper} onClick={handleClick}>
			<img className={card.card_image} src={"https://www.sperlich.at/assets/project_pictures/" + props.Name.toLowerCase().replace(/ /g,'') + "_preview.png"} />
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
	return props.tags.map(function (value:any) {
		return <Tag text={value} />;
	});
}

export async function getStaticProps() {
	const projects = await fetch('http://localhost:3000/api/projects/all').then(
		res => { return res.json()}
	);

	let tags:Array<Project>;
	for(let i = 0; i < projects.length; i++) {
		let ptags:string = await db("SELECT Name FROM ProjekteTags JOIN Tags ON TID = TAG_FK WHERE PR_FK = " + projects[i].PRID + "");
		projects[i].Tags = [];
		ptags.forEach((e:any, t:any) => {
			projects[i].Tags[t] = e.Name;
		})

	}

	return {
		props:{
			data:projects,
		},
		revalidate:10,
	}
}
