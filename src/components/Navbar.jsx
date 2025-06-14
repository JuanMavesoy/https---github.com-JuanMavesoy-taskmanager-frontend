import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid className="px-md-5 px-3">
        <Navbar.Brand as={Link} to="/">TaskManagerPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
            <Nav.Link as={Link} to="/tareas">Tareas</Nav.Link>
            <Nav.Link as={Link} to="/reportes">No Found</Nav.Link>
            <Nav.Link as={Link} to="/acerca">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
