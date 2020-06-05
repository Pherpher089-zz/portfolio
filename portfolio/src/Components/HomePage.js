import React from "react";

import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects.js";

const HomePage = () => {
	return (
		<div className="HomePage">
			<Header />
			<AboutMe name="AboutMe" />
			<Projects name="Projects" />
		</div>
	);
};

export default HomePage;
