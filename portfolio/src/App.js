//Packages
import React from "react";

//Components
import NavBar from "./Components/NavBar.js";
import Header from "./Components/Header.js";
import AboutMe from "./Components/AboutMe.js";
import Projects from "./Components/Projects.js";
import Footer from "./Components/Footer.js";

//Style
import "./App.scss";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Header />
			<AboutMe />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
