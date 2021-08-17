import Head from 'next/head';
import Image from 'next/image';
import welcomePNG from '../medias/pictures/welcome_background.png';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
	const [time, setTime] = useState(new Date());
	const [titleText, setText] = useState("### _TEXT_ ###");

	return (
		<>
			<Head>
				<meta name="description" content="Welcome to Sperlich.at - Programmer, Game-Developer and DB-Administrator" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<title key="home_title">HOME</title>
			</Head>
			<div id="pageContainer">
				<div id="topContent">
					<div id="welcomePNGWrapper"><Image src={welcomePNG} id="welcomePNG" layout="fill" /></div>
					<h1 id="welcomeMessage">Welcome to sperlich.at</h1>
				</div>
				<div id="contentWrap">
					{ /* Top Content */}

					{ /* Features */}
					<div className="features-container section-container">
						<div id="flexContainer">
							<div className="row">
								<div className="col-sm-12 features section-description wow fadeIn">
									<h2>My skill areas</h2>
									<div className="divider-1"><div className="line"></div></div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6 features-box wow fadeInLeft">
									<div className="row">
										<div className="col-sm-3 features-box-icon"><span className="material-icons">web</span></div>
										<div className="col-sm-9">
											<h3>Web Developement</h3>

											<ul>
												<li>HTML and CSS</li>
												<li>ASP.NET Core</li>
												<li>PHP and Javascript</li>
											</ul>

										</div>
									</div>
								</div>
								<div className="col-sm-6 features-box wow fadeInLeft">
									<div className="row">
										<div className="col-sm-3 features-box-icon"><span className="material-icons">keyboard</span></div>
										<div className="col-sm-9">
											<h3>Programming</h3>

											<ul>
												<li>Java &amp; JavaFX</li>
												<li>C# (Core &amp; .Net5)</li>
											</ul>

										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6 features-box wow fadeInLeft">
									<div className="row">
										<div className="col-sm-3 features-box-icon"><span className="material-icons">storage</span></div>
										<div className="col-sm-9">
											<h3>Database Management</h3>

											<ul>
												<li>Creating and designing Databases</li>
												<li>Databases in combination with C#, PHP</li>
												<li>Oracle, MongoDB, MySQL, PSQL</li>
											</ul>

										</div>
									</div>
								</div>
								<div className="col-sm-6 features-box wow fadeInLeft">
									<div className="row">
										<div className="col-sm-3 features-box-icon"><span className="material-icons">apps</span></div>
										<div className="col-sm-9">
											<h3>Other Competences</h3>

											<ul>
												<li>Microsoft Office (Excel, Word, Powerpoint)</li>
												<li>Game Development in Unity</li>
												<li>Usage of Blender</li>
											</ul>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{ /* Others */}
					{ /*<?PHP UploadIp(getUserIP(), "Startseite"); ?>
					<?PHP printBotTrap(); ?>
					<?PHP include $_SERVER["DOCUMENT_ROOT"]."/include/footer.html"; ?> */ }
				</div>
			</div>
		</>
	)
}
