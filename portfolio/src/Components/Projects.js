import React from "react";
import { DataContext } from "../data/DataContext";
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
			<h1 className="SectionTitle">Projects</h1>
			<div className="Projects">
				{projects.map((project) => (
					<div className="Project">
						<h1>{project.name}</h1>
						<Link to="./project" onClick={onClick}>
							<div className="Container">
								<img
									id={project.id}
									src={project.img}
									className="ProjectImg"
								/>
								<div className="OverLay" id={project.id}>
									<p className="Text">
										{project.description}
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
export default Projects;
