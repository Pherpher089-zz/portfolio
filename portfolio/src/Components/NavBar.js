import React, { useState } from "react";
import "./NavBar.scss";
function NavBar(props) {
	const [navState, setNavState] = useState("Close");
	const onClickMenu = (e) => {
		if (navState === "Close") {
			setNavState("Open");
		} else {
			setNavState("Close");
		}
	};

	if (navState) {
	}

	return (
		<>
			<nav className="Container">
				<div className="NavBar">
					<h1>Chris Tutor - Web Developer</h1>
					<button onClick={onClickMenu}>|||</button>
					<div className="NavBarBig">
						<button className="Link">About Me</button>
						<button className="Link">Portfolio</button>
						<button className="Link">Contact Me</button>
					</div>
				</div>
				<div className={navState + " DropDown"}>
					<div
						onClick={() => props.scrollTo("AboutMe")}
						className="Link"
					>
						About Me
					</div>
					<div
						onClick={() => props.scrollTo("Projects")}
						className="Link"
					>
						Projects
					</div>
					<div className="Link">Contact Me</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
