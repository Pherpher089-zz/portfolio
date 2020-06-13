import React from "react";
import { DataContext } from "../data/DataContext.js";
import "./ProjectView.scss";
const ProjectView = () => {
	const [state, setState] = React.useContext(DataContext);
	const project = state.projectData.projects[state.currentProject];

	const PrintTechUsed = () => {
		const label = ["Front End", "Back End"];
		let finalResult = [];
		for (var i = 0; i < project.techUsed.length; i++) {
			finalResult.push(<h3>{label[i]}</h3>);
			var result = project.techUsed[i].map((tech) => {
				return <li>{tech}</li>;
			});
			finalResult.push(result);
		}

		return finalResult;
	};
	return (
		<div className="Container">
			<h1 className="Title">{project.name}</h1>
			<div className="Group">
				<div className="Desc">{project.description}</div>
				<div className="SubGroup">
					<div className="SubGroup1">
						<img className="Img" src={project.img}></img>
					</div>
					<div className="SubGroup2">
						<div>
							<h2>TechUsed</h2>
							<div>{PrintTechUsed()}</div>
						</div>
						<div>
							<h2>My Responsibilities</h2>
							<div>{project.responsibilities}</div>
						</div>
					</div>
				</div>
				<div>links</div>
			</div>
		</div>
	);
};

export default ProjectView;
