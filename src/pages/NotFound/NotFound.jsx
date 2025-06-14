import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="mb-4">Página no encontrada</h2>
          <p className="text-muted">La página que estás buscando no existe o ha sido movida.</p>
          <Link to="/">
            <Button variant="primary" className="mt-3">Volver al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
