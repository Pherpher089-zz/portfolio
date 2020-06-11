//Packages
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import history from "./history";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import HomePage from "./Components/HomePage.js";
import ProjectView from "./Components/ProjectView.js";
//Style
import "./App.scss";

// Context
import { DataContextProvider } from "./data/DataContext.js";

function App() {
	return (
		<Router history={history}>
			<DataContextProvider>
				<div className="App">
					<NavBar />
					<Route exact path="/" component={HomePage} />
					<Route path="/project" component={ProjectView} />
					<Footer />
				</div>
			</DataContextProvider>
		</Router>
	);
}

export default App;
