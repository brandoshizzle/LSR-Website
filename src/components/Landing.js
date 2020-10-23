import React, { useState } from "react";
import spotifylogo from "../images/spotifylogo.png";
// import spotifylisten from "../images/listenonspotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import Overlay from "./Overlay";
// import ArtistFeature from "./ArtistFeature";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function ArtistList(props) {
	const delay = 2000 + props.number * 500;
	return (
		<li
			onClick={props.artistClick}
			style={{ transitionDelay: `${delay}ms` }}>
			<a href={props.link}>{props.name}</a>
			{/* <a href="#">{props.name}</a> */}
		</li>
	);
}

function Landing() {
	const [page, setPage] = useState("");
	// const [artistList, setArtistList] = useState([]);
	// const [featureOpacity, setFeatureOpacity] = useState(0);
	// const [artistCounter, setArtistCounter] = useState(0);

	const linkClick = (event) => {
		setPage(event.target.dataset.page);
	};

	// const artistClick = (event) => {
	// 	setFeatureOpacity(1);
	// };

	// const artistClose = (event) => {
	// 	setFeatureOpacity(0);
	// };

	const artists = [
		["David Oake", "https://www.spotify.com"],
		["Doug Parth", "https://www.spotify.com"],
		[
			"Backpack Frontpack",
			"https://open.spotify.com/artist/7yk1esI2Pvfrv7PLWf1zFQ",
		],
		["R I V E R", "https://open.spotify.com/album/5urdYZgEf5Wm6Tl9mjkArD"],
	];

	const artistComponents = artists.map((artistInfo, index) => (
		<ArtistList
			name={artistInfo[0]}
			link={artistInfo[1]}
			number={index}
			key={artistInfo[0]}
			// artistClick={artistClick}
		/>
	));

	return (
		<div className="App">
			<header
				className="App-header"
				style={{ textShadow: "0px 2px 3px #222" }}>
				<div
					style={{
						fontSize: "calc(10px + 2vmin)",

						marginTop: "15%",
						position: "fixed",
						top: 10,
					}}>
					<ReactCSSTransitionGroup
						transitionName="fade"
						transitionAppear={true}
						transitionAppearTimeout={5000}>
						<h1
							style={{
								margin: 0,
								fontWeight: 300,
								transitionDelay: "500ms",
							}}>
							LITTLE{" "}
							<span style={{ fontWeight: 400 }}>SYMPHONY</span>
						</h1>
						{/* <h1
						style={{
							textAlign: "left",
							margin: 0,
							fontWeight: 500,
						}}>
						SYMPHONY
					</h1> */}
						<h1
							style={{
								margin: 0,
								transitionDelay: "1000ms",
							}}>
							<span
								style={{
									fontWeight: 300,
								}}>
								RECORDS
							</span>
						</h1>
					</ReactCSSTransitionGroup>
					{/* Artist Feature */}
					{/* <ReactCSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={300}>
						<div
							style={{
								opacity: featureOpacity,
								transition: "1s",
							}}>
							<ArtistFeature
								artist={"David Oake"}
								closeFunction={artistClose}
							/>
						</div>
					</ReactCSSTransitionGroup> */}
					{/* End Artist Feature */}
				</div>

				<div style={{ marginTop: "auto", width: "100%" }}>
					<img
						src={spotifylogo}
						className="spotify-logo"
						alt="logo"
					/>
					<p>
						<a href="#footer">
							<FontAwesomeIcon icon={faChevronUp} />
						</a>
					</p>
				</div>

				<ul
					style={{
						position: "fixed",
						textAlign: "right",
						top: 0,
						right: 20,
						listStyleType: "none",
						color: "rgba(250,250,250,0.8)",
						fontSize: 26,
						fontFamily: "Roboto, sans-serif",
					}}>
					<ReactCSSTransitionGroup
						transitionName="fade"
						transitionAppear={true}
						transitionAppearTimeout={5000}
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={300}>
						{artistComponents}
					</ReactCSSTransitionGroup>
				</ul>
			</header>

			<section id="footer">
				<a
					href="#footer"
					data-page={"artistroster"}
					onClick={linkClick}>
					Our artists
				</a>
				<a href="#footer" data-page={"artistinfo"} onClick={linkClick}>
					Artist information
				</a>
				<a href="#footer" data-page={"playlistrequests"}>
					Playlist requests
				</a>
				<a href="mailto:general@littlesymphonyrecords.com">
					General Contact
				</a>
			</section>

			<Overlay page={page} />
		</div>
	);
}

export default Landing;
