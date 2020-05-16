import React from "react";
import MotherBoard from "../imgs/MotherBoard.png";
import "./Projects.scss";

function Projects(props) {
	return (
		<div className="Projects">
			<div className="Title">
				<h1>Groovn Music</h1>
			</div>
			<img src={MotherBoard} />
			<a>The App</a>
			<a href="https://github.com/Pherpher089/groovn-music-fe">
				The Code
			</a>
			<div className="Description">
				<h2>Description</h2>
				<p>
					An app for planning and organizing potlucks. Users can
					create potlucks with desired food items and invite others to
					attend. As an attendee, users can confirm or deny attendance
					as well as claim food items they would like to bring to the
					potluck.
				</p>
			</div>
			<div className="Tech">
				<h2>Tech Used</h2>
				<h3>Front End</h3>
				<ul>
					<li>React.js</li>
					<li>React Hooks</li>
					<li>React Context</li>
					<li>Apollo/GraphQL</li>
				</ul>
				<h3>Back End</h3>
				<ul>
					<li>Node.js</li>
					<li>GraphQL</li>
					<li>Mongo Database</li>
					<li>Passport.js(Spotify Strategy)</li>
				</ul>
			</div>
			<div className="Responsibilities">
				<h2>Responsibilities</h2>
				<p>
					My contribution to this project besides project planning,
					was the front end. I set up the React app with routes and
					the context.{" "}
				</p>
			</div>
		</div>
	);
}

export default Projects;
