//Packages
import React from "react";

//Images
import ProfilePic from "../imgs/ProfilePic.png";
//Styles
import "./Header.scss";

function Header(props) {
	return (
		<div className="Header-Container">
			<div className="ProfilePic-Container">
				<img
					className="ProfilePic"
					src={ProfilePic}
					alt="Christopher Tutor"
				/>
			</div>
			<p className="MissionStatement">"Eat, Code, Sleep a little bit"</p>
			<div className="Buttons">
				<button>Contact Me</button>
				<button>Learn More</button>
			</div>
		</div>
	);
}

export default Header;
