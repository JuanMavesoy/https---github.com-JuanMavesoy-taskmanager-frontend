import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import GifCarousel from '../../components/GifCarousel';

const Home = () => {
  return (
    <div className="home-section">
      <Container fluid >
          <Row className="align-items-center text-center text-md-start">
            <Col md={6} className="p-5 order-2 order-md-1">
              <h1 className="display-4 fw-bold text-primary mb-3">Bienvenido a TaskManagerPro</h1>
                <p className="lead text-secondary mb-4">
                  TaskManagerPro es una solución integral para la gestión de usuarios y tareas, diseñada para entornos académicos, administrativos y empresariales. Centraliza tus procesos en un solo lugar: crea, visualiza y organiza tareas asignadas a usuarios, con control sobre fechas límite, seguimiento y estado de cumplimiento. Su interfaz intuitiva y responsive permite trabajar de forma ágil, ordenada y eficiente, optimizando la productividad del equipo.
                </p>
              <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
                <Link to="/usuarios">
                  <Button variant="primary" size="lg">Gestionar Usuarios</Button>
                </Link>
                <Link to="/tareas">
                  <Button variant="outline-secondary" size="lg">Ver Tareas</Button>
                </Link>
              </div>
            </Col>
            <Col md={6} className="text-center p-5 order-1 order-md-2">
              <GifCarousel />
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Home;
