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
					</div>
					<p>
						Award-winning web developer and instructor with 10+
						years’ of well-rounded experience in LAMP development,
						object-oriented and user-centered design, seeks a
						position with a top technology firm.
					</p>
				</div>
			</div>
			<div className="Skills">
				<h1>What Do I Know?</h1>
				<div className="Skills-Section a">
					<h2>Languages</h2>
					<p> I speak a variety of useful languages.</p>
					<ul className="a">
						<li>HTML/CSS</li>
						<li>Javascript ES6</li>
						<li>Python 3</li>
						<li>C#</li>
						<li>C++</li>
					</ul>
				</div>
				<div className="Skills-Section">
					<h2>Front End</h2>
					<p>
						Front end work is what I enjoy the most. My strengths
						are React/Redux
					</p>
					<ul className="a">
						<li>HTML</li>
						<li>CSS/Less/Sass</li>
						<li>Javascript ES6</li>
						<li>React.js</li>
						<li>Redux</li>
						<li>Responsive Design</li>
						<li>Client Side Authentication</li>
					</ul>
				</div>
				<div className="Skills-Section">
					<h2>Back End</h2>
					<p>
						From crafting data base schemas to implementing
						authentication and testing, building a solid back end is
						one of my favorite kinds of puzzles.
					</p>
					<ul className="c">
						<li>Node.js</li>
						<li>SQL</li>
						<li>Knex.js</li>
						<li>Express Router</li>
						<li>Authentication/JWT/Password.js</li>
						<li>Back-end Testing (jest)</li>
						<li>Authentication (Sessions/Cookies/JWT)</li>
					</ul>
				</div>
				<div className="Skills-Section">
					<h2>Game Development</h2>
					<p>
						My origins are here in game programing. My love and
						passion for developing unique games has pushed my
						technical ability to where it is today
					</p>
					<ul className="c">
						<li>C#</li>
						<li>Unity3D</li>
						<li>Unreal Engine 4</li>
						<li>3D Modeling/Cinima 4D</li>
					</ul>
				</div>
				<div className="Skills-Section b">
					<h2>Other Technologies</h2>
					<p>This is all of the useful stuff I know.</p>
					<ul className="c">
						<li>Git</li>
						<li>Adobe Photoshop</li>
						<li>NPM/Yarn</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
