// LoginForm.js
import React, { useState, useContext } from "react";
import axios from "../axios";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation} from "react-router-dom";

function Login() {
	const { auth,setAuth } = useAuth();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);
	const location =useLocation();
	const navigate= useNavigate();
	const from =location.state?.pathname || "/home"

	const LOGIN_URL = "/authenticate";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			console.log(JSON.stringify({ userName, password }));
			const response = await axios.post(
				LOGIN_URL,
				{
					userName,
					password,
				},
				{ withCredentials: true, crossDomain: true }
			);
			console.log(response.data);
			setAuth(response.data);
			console.log(auth)
			setSuccess(true);
			navigate (from ,{replace :true});
		} catch (err) {
			if (err.response?.status === 403) {
			}
			setErrMsg("Auth Failed");
		}
	};

	return (
		<>
			 (
				<header className="loginPage">
					<p style={{ backgroundColor: "red" }}>
						{errMsg ? errMsg : errMsg}
					</p>
					<h2 style={{ color: "white" }}>Login</h2>
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
}

export default Login;
