import Head from 'next/head';
import Image from 'next/image';
import {Container, Grid, Button, Box, Divider} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../styles/theme.js';
import welcomePNG from '../medias/pictures/welcome_background.png';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
	//const [time, setTime] = useState(new Date());
	//const [titleText, setText] = useState("### _TEXT_ ###");

	return (
		<>
			<Head>
				<meta name="description" content="Welcome to Sperlich.at - Programmer, Game-Developer and DB-Administrator" />
				<title key="home_title">HOME</title>
			</Head>
			<div id="pageShadow"></div>
			<ThemeProvider theme={theme}>
				<Box>
					<Box>
						<div id="welcomePNGWrapper"><Image src={welcomePNG} id="welcomePNG" layout="fill" /></div>
						<h1 id="welcomeMessage">Welcome to sperlich.at</h1>
					</Box>
					{ /* Top Content */}

					{ /* Features */}
					<Grid id="welcomeSkills" container direction="row" justifyContent="space-evenly" alignItems="baseline" height="100%">
						<Grid style={{width:"100%"}}>
							<h3>My skill areas</h3>
						</Grid>
						<Grid item>
							<h3>Web Developement</h3>
							<ul>
								<li>HTML and CSS</li>
								<li>ASP.NET Core</li>
								<li>PHP and Javascript</li>
							</ul>
						</Grid>
						<Grid item>
							<h3>Programming</h3>
							<ul>
								<li>Java &amp; JavaFX</li>
								<li>C# (Core &amp; .Net5)</li>
							</ul>
						</Grid>
						<Divider style={{width:"100%"}}></Divider>
						<Grid item>
							<h3>Database Management</h3>
							<ul>
								<li>Creating and designing Databases</li>
								<li>Databases in combination with C#, PHP</li>
								<li>Oracle, MongoDB, MySQL, PSQL</li>
							</ul>
						</Grid>
						<Grid item>
							<h3>Other Competences</h3>
							<ul>
								<li>Microsoft Office (Excel, Word, Powerpoint)</li>
								<li>Game Development in Unity</li>
								<li>Usage of Blender</li>
							</ul>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</>
	)
}
