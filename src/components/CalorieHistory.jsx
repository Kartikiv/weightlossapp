import React, { Component } from "react";
import axios from "axios";

class CalorieHistory extends Component {
	state = { calorieData: [] };
	async componentDidMount() {
		const headers = {
			"ngrok-skip-browser-warning": 1,
		};
		const response = await axios.get(
			"https://6358-115-97-186-99.ngrok-free.app/getcaloriedata?userid=52",
			{
				headers: headers,
			},
			{ crossDomain: true }
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
							<tr scope="row" key={info.calorieId}>
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
