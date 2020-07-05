import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer(props) {
	return (
		<div className="Footer">
			<address>
				<div>email</div>
				<email>christutor089@gmail.com</email>
				<div>GitHub</div>
				<a href="https://github.com/Pherpher089">
					github.com/Pherpher089
				</a>
				<div>LinkedIn</div>
				<a href="https://www.linkedin.com/in/christopher-tutor-68a3b796/">
					www.linkedin.com/in/chris-tutor
				</a>
			</address>
			<div className="Footer-Nav">
				<Link to="/">Home</Link>
				<Link className="Button" to="/about">
					About Me
				</Link>
				<Link className="Button" to="/projects">
					Projects
				</Link>
				<Link className="Button" to="/contact">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Footer;
