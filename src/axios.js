import axios, { Axios } from "axios";

export default axios.create({
	baseURL: "http://192.168.0.214:8080/api/v1/auth",
});
