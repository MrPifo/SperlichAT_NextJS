import Head from 'next/head';
import Image from 'next/image';
import welcomePNG from '../medias/pictures/welcome_background.png';
import React,{ useState, useEffect, useRef } from 'react';

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
		<body>
				

			<div id="pageContainer">
				<div id="contentWrap">
					{ /* Top Content */ }
					<div className="top-content">
						<div id="welcomePNGWrapper">
							<Image src={welcomePNG} id="welcomePNG" layout="fill" />
						</div>
						<div className="container">
							<div className="row">
								<div className="col-sm-12 text wow fadeInLeft minimizeNavbar">
									<h1 style={{fontFamily:"Quicksand",fontSize:"5vmin",textShadow:"0px 0px 6px #888"}}>Welcome to sperlich.at</h1>
									<div className="description">
										<p className="medium-paragraph" style={{fontSize:"2vw",textShadow:"0px 0px 6px #444"}}></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{ /* Features */ }
					<div className="features-container section-container">
							<div className="container">
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
														<p>
															<ul>
																<li>HTML and CSS</li>
																<li>ASP.NET Core</li>
																<li>PHP and Javascript</li>
															</ul>
														</p>
												</div>
											</div>
										</div>
										<div className="col-sm-6 features-box wow fadeInLeft">
											<div className="row">
												<div className="col-sm-3 features-box-icon"><span className="material-icons">keyboard</span></div>
												<div className="col-sm-9">
													<h3>Programming</h3>
														<p>
															<ul>
																<li>Java &amp; JavaFX</li>
																<li>C# (Core &amp; .Net5)</li>
															</ul>
														</p>
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
													<p>
														<ul>
															<li>Creating and designing Databases</li>
															<li>Databases in combination with C#, PHP</li>
															<li>Oracle, MongoDB, MySQL, PSQL</li>
														</ul>
													</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6 features-box wow fadeInLeft">
										<div className="row">
											<div className="col-sm-3 features-box-icon"><span className="material-icons">apps</span></div>
											<div className="col-sm-9">
												<h3>Other Competences</h3>
													<p>
														<ul>
															<li>Microsoft Office (Excel, Word, Powerpoint)</li>
															<li>Game Development in Unity</li>
															<li>Usage of Blender</li>
														</ul>
													</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					{ /* Others */ }
					{ /*<?PHP UploadIp(getUserIP(), "Startseite"); ?>
					<?PHP printBotTrap(); ?>
					<?PHP include $_SERVER["DOCUMENT_ROOT"]."/include/footer.html"; ?> */ }
				</div>
			</div>
				{ /* JavaScript */ }
				<script src="https://www.sperlich.at/assets/js/backstretch.min.js"></script>
				<script src="js/navbar.js"></script>
			</body>
		</>
	)
}
