//Packages
import React from "react";

//Images
import ProfilePic from "../imgs/ProfilePic.png";
//Styles
import "./Header.scss";

function Header(props) {
	return (
		<div className="Header-Container">
			<div className="Statement-Container">
				<p>
					Hi there, I'm Chris. I make web applications front to back.
				</p>
			</div>
			<div className="LearnMore">
				<div>Learn More</div>
				<div>V</div>
			</div>
		</div>
	);
}

export default Header;
