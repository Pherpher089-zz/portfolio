import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import GitHubIcon from "../imgs/GitHub_Icon.png";
import LinkedInIcon from "../imgs/LinkedIn_Icon.png";
function Footer(props) {
	return (
		<div className="Footer">
			<div className="Info">
				<div className="Email">
					<p>Contact me:</p>
					<email>christutor089@gmail.com</email>
				</div>
				<div className="Icons">
					<a
						href="https://www.linkedin.com/in/christopher-tutor/"
						target="_blank"
					>
						<img className="Icon" src={GitHubIcon} />
					</a>
					<a href="https://github.com/Pherpher089" target="_blank">
						<img className="Icon" src={LinkedInIcon} />
					</a>
				</div>
				<div className="Footer-Nav">
					<Link to="/">Home</Link>
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
		</div>
	);
}

export default Footer;
