import React, { useState } from "react";
import spotifylogo from "../images/spotifylogo.png";
import spotifylisten from "../images/listenonspotify.png";
import "../App.css";
import Overlay from "./Overlay";

function Landing() {
	const [page, setPage] = useState("");

	const linkClick = (event) => {
		setPage(event.target.dataset.page);
	};

	return (
		<div className="App">
			<header
				className="App-header"
				style={{ textShadow: "0px 2px 3px #222" }}>
				<h1 style={{ margin: 0, marginTop: "30vh" }}>
					<span style={{ fontWeight: 300 }}>LITTLE</span>{" "}
					<span style={{ fontWeight: 500 }}>SYMPHONY</span>
				</h1>
				<h1 style={{ margin: 0, fontSize: "calc(10px + 4vmin)" }}>
					<span style={{ fontWeight: 400 }}>RECORDS</span>
				</h1>
				<div style={{ marginTop: "auto" }}>
					<img
						src={spotifylisten}
						className="spotify-logo"
						alt="logo"
					/>
					<p>^</p>
				</div>
			</header>

			<section id="footer">
				<a
					href="#footer"
					data-page={"artist roster"}
					onclick={linkClick}>
					Our artists
				</a>
				<a href="#footer" data-page={"artist roster"}>
					Artist information
				</a>
				<a href="#footer" data-page={"artist roster"}>
					Playlist requests
				</a>
				<a href="mailto:general@littlesymphonyrecords.com">
					General Contact
				</a>
			</section>

			<Overlay component={page} />
		</div>
	);
}

export default Landing;
