import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamBurger from "../imgs/HamBurger.png";
import CT_Logo from "../imgs/CT_Logo.png";
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
					<img
						className="HamBurger"
						onClick={onClickMenu}
						src={HamBurger}
						alt="|||"
					/>

					<div className="NavBarBig">
						<Link className="Button" to="/">
							Home
						</Link>
						<Link className="Button" to="/about">
							About Me
						</Link>
						<Link className="Button" to="/projects">
							Projects
						</Link>
						{/* <Link className="Button" to="/contact">
							Contact
						</Link> */}
					</div>
				</div>
				<div className={navState + " DropDown"}>
					<Link className="Button" to="/" onClick={onClickMenu}>
						Home
					</Link>
					<Link className="Button" to="/about" onClick={onClickMenu}>
						About Me
					</Link>
					<Link
						className="Button"
						to="/projects"
						onClick={onClickMenu}
					>
						Projects
					</Link>
					{/* <Link className="Button" to="/contact">
						Contact Me
					</Link> */}
				</div>
			</nav>
		</>
	);
}

export default NavBar;
