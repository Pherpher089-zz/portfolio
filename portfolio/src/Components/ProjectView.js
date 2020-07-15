import React from "react";
import { DataContext } from "../data/DataContext.js";
import "./ProjectView.scss";

const ProjectView = () => {
	const [state, setState] = React.useContext(DataContext);
	const project = state.projectData.projects[state.currentProject];
	const PrintLinks = () => {
		const label = ["Site", "Front End", "Back End"];
		let c = -1;
		const finalResult = [];
		let result = project.links.map((link) => {
			c++;
			if (project.links[c] !== "") {
				return (
					<button
						onClick={() => {
							window.open(link);
						}}
					>{`${label[c]}`}</button>
				);
			}
		});

		return result;
	};
	const PrintTechUsed = () => {
		const label = ["Front End", "Back End"];
		let finalResult = [];
		for (var i = 0; i < project.techUsed.length; i++) {
			if (project.techUsed[i].length > 0) {
				let _result = (
					<div className="TechList">
						<h3>{label[i]}</h3>
						<ul>
							{project.techUsed[i].map((tech) => {
								return <li>{tech}</li>;
							})}
						</ul>
					</div>
				);
				finalResult.push(_result);
			}
		}

		return finalResult;
	};
	return (
		<div className="ProjectViewContainer">
			<h1 className="Title">{project.name}</h1>
			<div className="Group">
				<div className="Desc">{project.description}</div>
				<div className="SubGroup">
					<div className="SubGroup1">
						<img className="Img" src={project.img}></img>
						<div className="LinkContainer">
							<div className="Links">{PrintLinks()}</div>
						</div>
					</div>
					<div className="SubGroup2">
						<div className="TechContainer">
							<h2>TechUsed</h2>
							<div className="Tech">{PrintTechUsed()}</div>
						</div>
						<div className="Resp">
							<h2>My Responsibilities</h2>
							<div>{project.responsibilities}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectView;
