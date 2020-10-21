import React from "react";
import album from "../images/album.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function ArtistFeature(props) {
	return (
		<div
			style={{
				width: "100%",
				marginTop: 20,
				textAlign: "center",
				background: "rgba(190,221,230,0.9)",
			}}>
			<div
				style={{
					display: "flex",
					width: "100%",
					margin: "auto",
					borderRadius: 20,
					padding: 20,
					maxHeight: 440,
					fontFamily: "Roboto, sans-serif",
					textAlign: "left",
				}}>
				<img
					src={album}
					className="album-cover"
					alt="logo"
					style={{
						objectFit: "contain",
						minHeight: 400,
						minWidth: 400,
					}}
				/>
				<div
					style={{
						paddingLeft: 30,
						maxWidth: 600,
						color: "#333",
						textShadow: "0px 0px 0px #444",
					}}>
					<h3
						style={{
							fontWeight: 400,
							marginTop: 10,
						}}>
						David Oake
					</h3>
					<p
						style={{
							fontSize: 18,
						}}>
						David Oake, also known as Dave Suave, is a
						multi-instrumentalist and producer who has a cat named
						Moo Moo.
					</p>
				</div>
				<div style={{ color: "#222" }}>
					<FontAwesomeIcon
						icon={faTimes}
						onClick={props.closeFunction}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default ArtistFeature;
