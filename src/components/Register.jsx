import React, { useState } from "react";

const Register = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	const handleSubmit = async (e) => {};

	return (
		<>
			(
			<header className="registerPage">
				<p style={{ backgroundColor: "red" }}>
					{errMsg ? errMsg : errMsg}
				</p>
				<h2 style={{ color: "white" }}></h2>
				<form onSubmit={handleSubmit}>
					<div style={{ color: "white" }}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							required
						/>
					</div>
					<div style={{ color: "white" }}>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
			)
		</>
	);
};

export default Register;
