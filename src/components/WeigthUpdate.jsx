import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useAuth from "../hooks/useAuth";

function WeigthUpdate() {

	const { auth } = useAuth();

  const [formData, setFormData] = useState({
    weight: 0,
    userInformation: {
      userId: auth?.userInformation.userId,
	  role:"USER"
    },
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, weight: value });
    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.weight === 0) {
      console.log("zero");
      return;
    }

    const token=auth?.token;

    const header = {
      Authorization: `Bearer ${token}`,
    };

    try {
      // Make an Axios POST request to submit the form data
      const response = await axios.post(
        "http://192.168.0.214:8080/addweightdata",
        formData,
        { headers: header }
      );
      console.log(response.data);
      
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="WeigthUpdate">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            style={{
              backgroundColor: "#282c34",
              color: "white",
            }}
            type="decimal"
            placeholder="Enter Weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default WeigthUpdate;
