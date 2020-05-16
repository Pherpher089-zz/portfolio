//Packages
import React from "react";

//Images
import ProfilePic from "../imgs/ProfilePic.png";
import MotherBoard from "../imgs/MotherBoard.png";
import KeyBoard from "../imgs/KeyBoard.png";
import MotherBoard2 from "../imgs/MotherBoard2.png";

//Styling
import "./AboutMe.scss";
function AboutMe(props) {
	return (
		<div className="AboutMe-Container">
			<div className="AboutMe">
				<h1>Who am I?</h1>
				<div className="WhoAmI-Content">
					<div className="WhoAmI-TopContent">
						<img src={ProfilePic} />
						<p>
							Award-winning web developer and instructor with 10+
							years’ of well-rounded experience in LAMP
							development, object-oriented and user-centered
							design, seeks a position with a top technology firm
						</p>
					</div>
					<address>
						phone: (408)375-5016
						<br />
						<br />
						email: christutor089@gmail.com <br />
						<br />
						resume: ???
						<br />
						<br />
						GitHub:{" "}
						<a href="https://github.com/Pherpher089">
							github.com/Pherpher089
						</a>{" "}
						<br />
						<br />
						LinkedIn:{" "}
						<a href="https://www.linkedin.com/in/christopher-tutor-68a3b796/">
							linkedin.com/in/chris-tutor
						</a>
					</address>
				</div>
			</div>
			<div className="Skills">
				<h1>What do I know?</h1>
				<div className="Skills-Section">
					<h2>Languages</h2>
					<ul>
						<li>HTML/CSS</li>
						<li>JavaScript/Node.js</li>
						<li>Python</li>
						<li>C#</li>
						<li>C++</li>
					</ul>
				</div>

				<div className="Skills-Section">
					<h2>Frameworks/APIs</h2>
					<ul className="a">
						<li>React.js</li>
						<li>Redux</li>
						<li>GraphQL</li>
						<li>Express.js</li>
						<li>Knex.js</li>
						<li>Django</li>
						<li>Axios</li>
						<li>Flask</li>
					</ul>
				</div>
				<div className="Skills-Section">
					<h2>Other Skills/Knowledge </h2>
					<ul className="b">
						<li>Responsive Web Design</li>
						<li>Precompilers (Less, Sass)</li>
						<li>Relational Databases</li>
						<li>Data Structures and Algorithms</li>
						<li>Blockchain Technology</li>
						<li>Game development/Programming (Unity3D)</li>
						<li>Back-end Testing (jest)</li>
						<li>Authentication (Sessions/Cookies/JWT)</li>
						<li>Git</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
