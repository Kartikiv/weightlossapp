import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
	state = {};
	render() {
		return <h1>Welcome to your weight loss journey {}
			<Link to="login">
			Login</Link> </h1>;
	}
}
export default HomePage;
