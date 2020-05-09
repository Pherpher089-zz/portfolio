import React from "react";

function NavBar(props) {
	return (
		<nav>
			<h1>Chris Tutor</h1>
			<div>
				/*This actually needs to be a drop down box*/
				<a>About Me</a>
				<a>Portfolio</a>
				<a>Contact Me</a>
			</div>
		</nav>
	);
}

export default NavBar;
