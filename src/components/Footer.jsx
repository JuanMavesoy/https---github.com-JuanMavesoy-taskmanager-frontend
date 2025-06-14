// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <p className="mb-0">&copy; {new Date().getFullYear()} TaskManagerPro. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <small>
              Desarrollado como parte de la Actividad 2 del curso de Desarrollo de Aplicaciones Web <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white text-decoration-underline">GitHub</a>
            </small> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
