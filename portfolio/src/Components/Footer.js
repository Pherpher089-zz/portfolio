import React from "react";
import "./Footer.scss";
function Footer(props) {
	return (
		<div className="Footer">
			<address>
				<email>email: christutor089@gmail.com</email>
				<phone>phone: (408)375-5016 {"\n"}</phone>
				<a href="https://github.com/Pherpher089">
					<p>GitHub: </p> github.com/Pherpher089
				</a>
				<a href="https://www.linkedin.com/in/christopher-tutor-68a3b796/">
					<p>LinkedIn: </p> www.linkedin.com/in/chris-tutor
				</a>
			</address>
			<div className="Footer-Nav">
				<a>Contact Me</a>
				<a>About Me</a>
				<a>Projects</a>
				<a>Resumes</a>
			</div>
		</div>
	);
}

export default Footer;
