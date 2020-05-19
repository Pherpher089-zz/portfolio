import React from "react";
import "./Footer.scss";
function Footer(props) {
	return (
		<div className="Footer">
			<address>
				<div>email</div>
				<email>christutor089@gmail.com</email>
				<div>Phone</div>
				<phone>(408)375-5016 {"\n"}</phone>
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
				<a>Contact Me</a>
				<a onClick={() => props.scrollTo("AboutMe")}>About Me</a>
				<a onClick={() => props.scrollTo("Projects")}>Projects</a>
				<a>Resumes</a>
			</div>
		</div>
	);
}

export default Footer;
