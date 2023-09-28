import logo from "./logo.svg";
import React, { Component } from "react";
import HomePage from "./components/homePage";
import WeigthHistory from "./components/WeigthHistory";

import "./App.css";
import CalorieHistory from "./components/CalorieHistory";
import WeigthUpdate from "./components/WeigthUpdate";
import NavBarComponent from "./components/NavBarComponent";

State: {
}

function App() {
	return (
		<React.Fragment>
			<NavBarComponent />
		</React.Fragment>
	);
}

export default App;
