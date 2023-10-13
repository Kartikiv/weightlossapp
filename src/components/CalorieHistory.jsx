import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function CalorieHistory() {
  const [calorieData, setCalorieData] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const header = {
          Authorization: `Bearer ${auth?.token}`,
        };

        const response = await axios.get(
          `http://192.168.0.214:8080/getcaloriedata?userid=${auth?.userInformation.userId}`,
          { headers: header },
		  { crossDomain: true, withCredentials: true }
        );

        const propsv = response.data;
        setCalorieData(propsv);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth]);

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
              <td>{new Date(info.consumptionDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalorieHistory;
