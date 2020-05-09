import React from "react";
import ProfilePic from "../imgs/ProfilePic.png";
function Header(props) {
	return (
		<div>
			<img src={ProfilePic} alt="Christopher Tutor" />
			<h1>Christopher Tutor</h1>
			<p>This will be my mission statement</p>
			<div>
				<button>Contact Me</button>
				<button>Learn More</button>
			</div>
		</div>
	);
}

export default Header;
