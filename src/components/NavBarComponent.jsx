import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

class NavBarComponent extends Component {
	state = {};
	render() {
		return (
			<div>
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
									<Nav.Link>
										<Link to="weigth">Weigth</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to="calorie">CalorieInfo</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to="update">Update</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to="food">food</Link>
									</Nav.Link>
									<Nav.Link>
										<Link to="login">login</Link>
									</Nav.Link>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
				<div>
					<Outlet />
				</div>
			</div>
		);
	}
}

export default NavBarComponent;
