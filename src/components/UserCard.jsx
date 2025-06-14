import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const UserCard = ({ usuario, onEdit, onDelete }) => {
  const { id, nombre, correo, rol } = usuario;

  return (
    <Card className="shadow-sm mb-3" style={{ width: '100%' }}>
      <Card.Body>
        <Row className="align-items-center">
          <Col md={8}>
            <h5 className="mb-1">{nombre}</h5>
            <p className="mb-1 text-muted">{correo}</p>
            <p className="mb-0">Rol: {rol}</p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0 d-flex justify-content-md-end gap-2">
            <Button variant="primary" size="sm" onClick={() => onEdit(usuario)}>
              <Pencil className="me-1" />
              Editar
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(usuario)}>
              <Trash className="me-1" />
              Eliminar
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
