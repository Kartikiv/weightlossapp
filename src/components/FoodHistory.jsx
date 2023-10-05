import React, { useState, useEffect } from "react";
import axios from "axios";
// FoodHistory a functional component to use the hooks useState, useEffect
//
function FoodHistory() {
	const [foodData, setFoodData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const token = process.env.REACT_APP_TOKEN_API;

			const header = {
				Authorization: `Bearer ${token}`,
			};

			const response = await axios.get(
				"http://192.168.0.214:8080/foodeatenbyuser?userId=52",
				{ headers: header },
				{ crossDomain: true, withCredentials: true }
			);
			setFoodData(response.data);
		};
		fetchData();
	}, []);
	let totalcalories = 0;
	let totalprotien = 0;
	return (
		<div className="tableprop weigth">
			<table className="table table-sm table-dark">
				<thead>
					<tr>
						<th>name</th>
						<th>protein</th>
						<th>carbohydrates</th>
						<th>fats</th>
						<th>calories</th>
						<th>vitaminA</th>
						<th>vitaminB1</th>
						<th>vitaminB2</th>
						<th>vitaminB3</th>
						<th>vitaminB5</th>
						<th>vitaminB6</th>
						<th>vitaminB7</th>
						<th>vitaminB9</th>
						<th>vitaminB12</th>
						<th>vitaminC</th>
						<th>vitaminD</th>
						<th>vitaminE</th>
						<th>vitaminK</th>
						<th>calcium</th>
						<th>iron</th>
						<th>magnesium</th>
						<th>potassium</th>
						<th>phosphorus</th>
						<th>sodium</th>
						<th>selenium</th>
						<th>copper</th>
						<th>manganese</th>
					</tr>
				</thead>
				<tbody>
					{foodData.map((info) => (
						<tr key={info.foodId}>
							<td>{info.name}</td>
							<td>{info.protein}</td>
							<td>{info.carbohydrates}</td>
							<td>{info.fats}</td>
							<td>{info.calories}</td>
							<td>{info.vitaminA}</td>
							<td>{info.vitaminB1}</td>
							<td>{info.vitaminB2}</td>
							<td>{info.vitaminB3}</td>
							<td>{info.vitaminB5}</td>
							<td>{info.vitaminB6}</td>
							<td>{info.vitaminB7}</td>
							<td>{info.vitaminB9}</td>
							<td>{info.vitaminB12}</td>
							<td>{info.vitaminC}</td>
							<td>{info.vitaminD}</td>
							<td>{info.vitaminE}</td>
							<td>{info.vitaminK}</td>
							<td>{info.calcium}</td>
							<td>{info.iron}</td>
							<td>{info.magnesium}</td>
							<td>{info.potassium}</td>
							<td>{info.sodium}</td>
							<td>{info.selenium}</td>
							<td>{info.copper}</td>
							<td>{info.manganese}</td>
							{(totalcalories = totalcalories + info.calories)}
							{(totalprotien = totalprotien + info.protein)}
						</tr>
					))}
				</tbody>
			</table>
			<span style={{ color: "white", padding: "10px" }}>
				Total calorie : {totalcalories}
			</span>
			<span style={{ color: "white" }}>
				Total protien : {totalprotien}
			</span>
		</div>
	);
}

export default FoodHistory;
