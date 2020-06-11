import React from "react";
import { DataContext } from "../data/DataContext.js";

const ProjectView = () => {
	const [state, setState] = React.useContext(DataContext);
	const project = state.projectData.projects[state.currentProject];
	return <div>{project.name}</div>;
};

export default ProjectView;
