import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import useAuth from "../hooks/useAuth";

Chart.register(...registerables);

function WeightHistory() {
  const [weightState, setWeightState] = useState({
    weightData: [],
    labels: [],
    datasets: [
      {
        label: "Weight Graph",
        backgroundColor: "Indigo",
        borderColor: "Indigo",
        fill: false,
        lineTension: 0.5,
        borderWidth: 2,
        data: [],
      },
    ],
  });

  const { auth } = useAuth();


  useEffect(() => {
    const fetchData = async () => {
      const token = auth;
	  console.log(token);
	  
      const header = {
        Authorization: `Bearer ${auth?.token}`,
      };

      try {
        const response = await axios.get(
          `http://192.168.0.214:8080/getuserweightdata?userid=${auth?.userInformation.userId}`,
          { headers: header }
        );

        const weightData = response.data;
        const weightArray = weightData.map((item) => item.weight);
        const labels = weightData.map((item) =>
          new Date(item.createdDate).toLocaleDateString()
        );

        setWeightState((prevState) => ({
          ...prevState,
          weightData,
          datasets: [
            {
              ...prevState.datasets[0],
              data: weightArray,
            },
          ],
          labels,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth]);

  const { weightData } = weightState;

  return (
    <div className="tableprop weight">
      <table className="table table-sm table-dark">
        <thead>
          <tr>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {weightData.map((info) => (
            <tr key={info.weightId}>
              <td>{info.weight}</td>
              <td>
                {info.createdDate === null
                  ? "null"
                  : new Date(info.createdDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
	  <div className="chartJsContainer" style={{ width: '800px', overflow: 'auto', scrollbarWidth: 'thin' }}>
 
  <div className="chartjs">
    <Line
      data={{
        labels: weightState.labels,
        datasets: weightState.datasets,
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Weight Graph",
            font: {
              size: 20,
            },
          },
        },
        legend: {
          display: true,
          position: "right",
        },
        responsive: true, // Prevent chart from resizing
        maintainAspectRatio: true, // Prevent chart from maintaining aspect ratio
      }}
    />
  </div>
</div>

    </div>
  );
}

export default WeightHistory;
