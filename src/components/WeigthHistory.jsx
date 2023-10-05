import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
class WeigthHistory extends Component {
	state = {
		weightData: [],
		labels: [],
		datasets: [
			{
				label: "Weight Graph",
				backgroundColor: [
					"Indigo",
					"Purple",
					"Yellow",
					"Teal",
					"Red",
					"Navy",
					"Brown",
				],
				fill: false,
				lineTension: 0.5,
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				data: [250, 24],
			},
		],
	};

	async componentDidMount() {
		const token = process.env.REACT_APP_TOKEN_API;

		const header = {
			Authorization: `Bearer ${token}`,
		};

		const response = await axios.get(
			"http://192.168.0.214:8080/getuserweightdata?userid=52",
			{ headers: header },
			{ crossDomain: true, withCredentials: true }
		);
		const weightData = response.data;

		const weightArray = weightData.map((item) => item.weight);
		const labels = weightData.map((item) =>
			new Date(item.createdDate).toLocaleDateString()
		);

		this.setState((prevState) => ({
			weightData,
			datasets: [
				{
					...prevState.datasets[0], // Preserve other dataset properties
					data: weightArray,
				},
			],
			labels,
		}));
	}
	render() {
		const { weightData } = this.state;

		return (
			<div className="tableprop weigth">
				<table className="table table-sm table-dark">
					<thead>
						<tr scope="col">
							<th>Weigth</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{weightData.map((info) => (
							<tr scope="row" key={info.weightId}>
								<td>{info.weight}</td>
								<td>
									{info.createdDate === null
										? "null"
										: new Date(
												info.createdDate
										  ).toLocaleDateString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="chartjs">
					<div class="chartAreaWrapper">
						<canvas id="myChart" height="300" width="1200"></canvas>
					</div>
					<Line
						data={{
							labels: this.state.labels, // Pass the labels
							datasets: this.state.datasets, // Pass the datasets
						}}
						options={{
							title: {
								display: true,
								text: "Weight Graph",
								fontSize: 20,
							},
							legend: {
								display: true,
								position: "right",
							},
							responsive: true, // Make the chart responsive
							maintainAspectRatio: true,
						}}
					/>
				</div>
			</div>
		);
	}
}

export default WeigthHistory;
