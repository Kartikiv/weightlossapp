import React from "react";

import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import RequireAuth from "./components/RequireAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import HomePage from "./components/homePage";
import CalorieHistory from "./components/CalorieHistory";
import WeightHistory from "./components/WeigthHistory";
import WeigthUpdate from "./components/WeigthUpdate";
import FoodHistory from "./components/FoodHistory";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="/" element={<HomePage />} />
				<Route element={<RequireAuth />}>
					<Route path="home" element={<NavBarComponent />}>
						<Route path="weigth" element={<WeightHistory />} />
						<Route path="calorie" element={<CalorieHistory />} />
						<Route path="update" element={<WeigthUpdate />} />
						<Route path="food" element={<FoodHistory />} />
						<Route path="login" element={<Login />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
