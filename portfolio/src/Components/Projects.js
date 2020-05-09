import React from "react";
import MotherBoard from "../imgs/MotherBoard.png";
function Projects(props) {
	return (
		<div className="header">
			<h1>Project Title</h1>
			<img src={MotherBoard} />
			<p>Project Description</p>
			<div>
				<h2>Tech Used</h2>
				<ul>
					<li>Tech #1</li>
					<li>Tech #2</li>
					<li>Tech #3</li>
					<li>Tech #4</li>
					<li>Tech #5</li>
				</ul>
			</div>
			<p>My responsibilities</p>
		</div>
	);
}

export default Projects;
