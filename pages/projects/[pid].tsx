import Head from 'next/head';
const fetch = require('node-fetch');
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../../styles/theme.js';
import {Container, Grid, Button, Box, Divider, ImageList} from '@material-ui/core';
import projects from '../../styles/projects.module.scss';

export default function Main({res}) {
	console.log(res);
	return (
	<>
		<Head>
			<meta name="description" content="Welcome to Sperlich.at - Programmer, Game-Developer and DB-Administrator" />
			<title key="home_title">HOME</title>
		</Head>
		<div id="pageShadow"></div>
		<ThemeProvider theme={theme}>
			<Box id={projects.root}>
				<h1 id={projects.title}>{res.Name}</h1>
				<Box id={projects.images} style={{textAlign:"center"}}>
					<img src={"https://www.sperlich.at/assets/project_pictures/"  + res.Name.toLowerCase().replace(/ /g,'') + "_preview.png"} style={{width:"700px"}} />
				</Box>
				<Box id={projects.longDesc} style={{width:"70%",margin:"auto"}}>
					<p dangerouslySetInnerHTML={{__html:res.BeschreibungLang}}></p>
				</Box>
			</Box>
		</ThemeProvider>
	</>
	)
}

export async function getStaticProps({params}) {
	const res = await fetch('http://localhost:3000/api/projects/' + params.pid).then(
		res => { return res.json()}
	);
	
	return {
		props: {
		  res,
		},
	}
}

export async function getStaticPaths() {
	const res = await fetch('http://localhost:3000/api/projects/all').then(
		res => { return res.json()}
	);
	let paths = [];
	for(let i = 0; i < res.length; i++) {
		paths[i] = {params:{pid:i+""}};
	}
	return {
	  paths:paths, 
	  fallback: true,
	};
}