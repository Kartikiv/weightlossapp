import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
class WeigthUpdate extends Component {
	state = {
		formData: {
			weight: 0,
			userInformation: {
				userId: 52,
			},
		},
	};
	handleChange = (e) => {
		const { value } = e.target;
		const { formData } = this.state;
		formData.weight = value;
		this.setState({ formData: formData });
		console.log(value);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { formData } = this.state;
		if (formData.weight === 0) {
			console.log("zero");
			return;
		}
		const token = process.env.REACT_APP_TOKEN_API;

		const header = {
			Authorization: `Bearer ${token}`,
		};

		// Make an Axios POST request to submit the form data
		const response = axios.post(
			"http://192.168.0.214:8080/addweightdata",
			formData,
			{ headers: header },
			{ crossDomain: true, withCredentials: true }
		);
		console.log(response.data);
		window.location.reload();
	};
	render() {
		const { formData } = this.state;
		return (
			<React.Fragment>
				<div className="WeigthUpdate">
					<Form onSubmit={this.handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label> Weigth</Form.Label>
							<Form.Control
								style={{
									backgroundColor: "#282c34",
									color: "white",
								}}
								type="decimal"
								placeholder="Enter Weigth"
								onChange={this.handleChange}
								placeholderstyle={{ color: "white" }}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</React.Fragment>
		);
	}
}

export default WeigthUpdate;
