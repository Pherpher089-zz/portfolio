import React, { useState } from "react";
import { Link } from "react-router-dom";
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
					<h1>Chris Tutor - Full Stack Web Developer</h1>
					<button className="DropDown Button" onClick={onClickMenu}>
						|||
					</button>
					<div className="NavBarBig">
						<Link className="Button" to="/">
							Home
						</Link>
						<Link className="Button">About Me</Link>
						<Link className="Button">Portfolio</Link>
						<Link className="Button">Contact Me</Link>
					</div>
				</div>
				<div className={navState + " DropDown"}>
					<Link className="Button" to="/">
						Home
					</Link>
					<Link className="Button">About Me</Link>
					<Link className="Button">Projects</Link>
					<Link className="Button">Contact Me</Link>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
