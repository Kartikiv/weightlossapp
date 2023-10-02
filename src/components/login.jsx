// LoginForm.js
import React, { useState } from "react";

function Login() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add your authentication logic here using the formData
		console.log("Form submitted with data:", formData);
	};

	return (
		<header className="loginPage">
			<h2 style={{ color: "white" }}>Login</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ color: "white" }}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div style={{ color: "white" }}>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div>
					<button
						type="submit"
						style={{ display: "block", marginLeft: "23%" }}
					>
						Login
					</button>
				</div>
			</form>
		</header>
	);
}

export default Login;
