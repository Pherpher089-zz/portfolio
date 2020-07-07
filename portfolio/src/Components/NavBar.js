import React, { useState } from "react";
import { Link } from "react-router-dom";
import CT_Logo from "../imgs/CT_Logo.jpg";
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
					<div className="Logo-Title">
						<img src={CT_Logo} className="Logo" />
						<h1>Chris Tutor - Full Stack Web Developer</h1>
					</div>
					<button className="DropDown Button" onClick={onClickMenu}>
						|||
					</button>
					<div className="NavBarBig">
						<Link className="Button" to="/">
							Home
						</Link>
						{/* <Link className="Button">About Me</Link>
						<Link className="Button">Portfolio</Link> */}
					</div>
				</div>
				<div className={navState + " DropDown"}>
					<Link className="Button" to="/">
						Home
					</Link>
					{/* <Link className="Button">About Me</Link>
					<Link className="Button">Projects</Link> */}
				</div>
			</nav>
		</>
	);
}

export default NavBar;
