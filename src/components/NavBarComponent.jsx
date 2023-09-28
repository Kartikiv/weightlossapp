import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WeigthHistory from "./WeigthHistory";
import CalorieHistory from "./CalorieHistory";
import HomePage from "./homePage";
import WeigthUpdate from "./WeigthUpdate";
import Offcanvas from "react-bootstrap/Offcanvas";

class NavBarComponent extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Router>
					<Navbar
						key="false"
						expand="sm"
						bg="dark"
						data-bs-theme="dark"
						className="bg-body-tertiary mb-3"
					>
						<Container fluid>
							<Navbar.Brand href="home">
								WeigthLossHelper
							</Navbar.Brand>
							<Navbar.Toggle
								aria-controls={`offcanvasNavbar-expand-sm`}
							/>
							<Navbar.Offcanvas
								id={`offcanvasNavbar-expand-false`}
								aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
								placement="start"
								bg="dark"
							>
								<Offcanvas.Header closeButton>
									<Offcanvas.Title
										id={`offcanvasNavbarLabel-expand-sm`}
									></Offcanvas.Title>
								</Offcanvas.Header>
								<Offcanvas.Body>
									<Nav className="justify-content-end flex-grow-1 pe-3">
										<Nav.Link href="weigth">
											Weigth
										</Nav.Link>
										<Nav.Link href="calorie">
											CalorieInfo
										</Nav.Link>
										<Nav.Link href="update">
											Update
										</Nav.Link>
									</Nav>
								</Offcanvas.Body>
							</Navbar.Offcanvas>
						</Container>
					</Navbar>
					<Routes>
						<Route path="/weigth" element={<WeigthHistory />} />
						<Route path="/calorie" element={<CalorieHistory />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/update" element={<WeigthUpdate />} />
					</Routes>
				</Router>
			</React.Fragment>
		);
	}
}

export default NavBarComponent;
