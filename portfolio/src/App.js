//Packages
import React from "react";
import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

//Components
import NavBar from "./Components/NavBar.js";

import Footer from "./Components/Footer.js";
import HomePage from "./Components/HomePage.js";
//Style
import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<HomePage />
			<Footer />
		</div>
	);
};

export default App;
