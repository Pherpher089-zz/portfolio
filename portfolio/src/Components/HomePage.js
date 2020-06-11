import React from "react";
import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects.js";
import { DataContext } from "../data/DataContext.js";

const HomePage = () => {
	const [state, setState] = React.useContext(DataContext);
	return (
		<div className="HomePage">
			<div>{console.log(state)}</div>
			<Header />
			<AboutMe name="AboutMe" />
			<Projects name="Projects" />
		</div>
	);
};

export default HomePage;
