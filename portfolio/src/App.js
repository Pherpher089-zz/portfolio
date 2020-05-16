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
import Header from "./Components/Header.js";
import AboutMe from "./Components/AboutMe.js";
import Projects from "./Components/Projects.js";
import Footer from "./Components/Footer.js";

//Style
import "./App.scss";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	scrollTo(section) {
		scroller.scrollTo(section, {
			duration: 800,
			delay: 500,
			smooth: "easeInOutQuart",
		});
	}
	render() {
		return (
			<div className="App">
				<NavBar scrollTo={this.scrollTo} />
				<Header />
				<AboutMe name="AboutMe" />
				<Projects name="Projects" />
				<Footer scrollTo={this.scrollTo} />
			</div>
		);
	}
}

export default App;
