//Packages
import React from "react";
import * as Scroll from "react-scroll";
//imgs
import GitHubIcon from "../imgs/GitHub_Icon.png";
import LinkedInIcon from "../imgs/LinkedIn_Icon.png";
//Styles
import "./Header.scss";

function Header(props) {
	function onClick() {
		Scroll.animateScroll.scrollTo(630);
	}
	return (
		<div className="Header-Container">
			<div className="Statement-Container">
				<p>
					Hi there, I'm Chris. I make web applications front to back.
				</p>
			</div>
			<div className="Icons">
				<a href="https://github.com/Pherpher089" target="_blank">
					<img className="Icon" src={GitHubIcon} />
				</a>
				<a
					href="https://www.linkedin.com/in/christopher-tutor/"
					target="_blank"
				>
					<img className="Icon" src={LinkedInIcon} />
				</a>
			</div>
			<div className="LearnMore" onClick={onClick}>
				<div>Learn More</div>
				<div>V</div>
			</div>
		</div>
	);
}

export default Header;
