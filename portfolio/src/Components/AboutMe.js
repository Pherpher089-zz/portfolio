import React from "react";
import ProfilePic from "../imgs/ProfilePic.png";
import MotherBoard from "../imgs/MotherBoard.png";
import KeyBoard from "../imgs/KeyBoard.png";
import MotherBoard2 from "../imgs/MotherBoard2.png";
function AboutMe(props) {
	return (
		<div>
			<div>
				<h1>Who am I?</h1>
				<div>
					<img src={ProfilePic} />
					<div>All my contact information</div>
					<p>Personal Summery</p>
				</div>
			</div>
			<div>
				<h1>What do I know?</h1>
				<div>
					<div>
						<h2>Languages</h2>
						<ul>
							<li>HTML/CSS</li>
							<li>JavaScript/Node.js</li>
							<li>Python</li>
							<li>C#</li>
							<li>C++</li>
						</ul>
					</div>
					<img src={MotherBoard2} />
				</div>
				<div>
					<img src={KeyBoard} />
					<div>
						<h2>Frameworks/APIs</h2>
						<ul>
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
				</div>
				<div>
					<div>
						<h2>Other Skills/Knowledge </h2>
						<ul>
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
					<img src={MotherBoard} />
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
