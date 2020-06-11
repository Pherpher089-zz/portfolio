import React from "react";
import { DataContext } from "../data/DataContext";
import history from "../history";
import { Link } from "react-router-dom";
import "./Projects.scss";

function Projects(props) {
	const [state, setState] = React.useContext(DataContext);

	const projects = state.projectData.projects;

	const onClick = (e) => {
		setState({ ...state, currentProject: e.target.id });
		console.log(`Current Project = ${state.currentProject}`);
		console.log(`e.target.id = ${e.target.id}`);
	};

	return (
		<div className="ProjectContainer">
			<h1>Projects</h1>
			<div className="Projects">
				{projects.map((project) => (
					<Link to="./project" onClick={onClick}>
						<img
							id={project.id}
							src={project.img}
							className="ProjectImg"
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
export default Projects;
