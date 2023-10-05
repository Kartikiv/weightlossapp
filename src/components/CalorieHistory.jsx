import React, { Component } from "react";
import axios from "axios";

class CalorieHistory extends Component {
	state = { calorieData: [] };

	async componentDidMount() {
		const token = process.env.REACT_APP_TOKEN_API;

		const header = {
			Authorization: `Bearer ${token}`,
		};
		const response = await axios.get(
			"http://192.168.0.214:8080/getcaloriedata?userid=52",
			{ headers: header },
			{ crossDomain: true, withCredentials: true }
		);
		const propsv = response.data;
		console.log(response.data);
		console.log(propsv);

		this.setState({ calorieData: propsv });
	}
	render() {
		const { calorieData } = this.state;
		console.log(calorieData);
		return (
			<div className="tableprop calorie">
				<table className="table table-sm table-dark">
					<thead>
						<tr>
							<th scope="col">calories</th>
							<th scope="col">Date</th>
						</tr>
					</thead>
					<tbody>
						{calorieData.map((info) => (
							<tr key={info.calorieId}>
								<td>{info.calories}</td>
								<td>
									{new Date(
										info.consumptionDate
									).toLocaleDateString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default CalorieHistory;
