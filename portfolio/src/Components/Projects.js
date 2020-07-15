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
		<div className="ProjectsContainer">
			<h1 className="SectionTitle">Projects</h1>
			<div className="Projects">
				{projects.map((project) => (
					<div className="Project">
						<h1>{project.name}</h1>

						<div className="ProjectContainer">
							<div className="DescContainer">
								<div className="Description">
									{project.description}
								</div>
								<Link
									id={project.id}
									to="./project"
									onClick={onClick}
									className="Button"
								>
									View Project
								</Link>
							</div>
							<div className="ImgContainer">
								<img
									id={project.id}
									src={project.img}
									className="ProjectImg"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Projects;
