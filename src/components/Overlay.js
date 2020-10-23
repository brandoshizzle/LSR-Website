import React from "react";

function Overlay(props) {
	if (props.page === "artistroster") {
		return (
			<div className="overlay">
				<div id="artistroster">Sup</div>
			</div>
		);
	} else if (props.page === "artistinfo") {
		return (
			<div className="overlay">
				<div id="artistinfo">Heyo</div>
			</div>
		);
	}
	return <div></div>;
}

export default Overlay;
