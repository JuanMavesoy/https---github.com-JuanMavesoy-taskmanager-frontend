// src/components/TareaCard.jsx
import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import dayjs from 'dayjs';

const TareaCard = ({ tarea, onEdit, onDelete }) => {
  const {
    titulo,
    descripcion,
    fechaLimite,
    completada,
    usuarioNombre,
  } = tarea;

  const hoy = dayjs();
  const fechaLimiteDia = dayjs(fechaLimite);
  let bgClass = 'bg-light'; // por defecto

  if (completada) {
    bgClass = 'bg-success-subtle';
  } else if (fechaLimiteDia.isBefore(hoy, 'day')) {
    bgClass = 'bg-danger-subtle';
  } else if (fechaLimiteDia.diff(hoy, 'day') <= 2) {
    bgClass = 'bg-warning-subtle';
  }

  const estadoBadge = completada
    ? <Badge bg="success">Completada</Badge>
    : <Badge bg="danger">Pendiente</Badge>;

  return (
    <Card className={`shadow-sm mb-3 ${bgClass}`}>
      <Card.Body>
        <Row className="align-items-center">
          <Col md={8}>
            <h5 className="mb-1">{titulo} {estadoBadge}</h5>
            <p className="mb-1 text-muted">{descripcion}</p>
            <p className="mb-1"><strong>Fecha límite:</strong> {fechaLimite}</p>
            <p className="mb-0"><strong>Asignada a:</strong> {usuarioNombre}</p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0 d-flex justify-content-md-end gap-2">
            <Button variant="primary" size="sm" onClick={() => onEdit(tarea)}>
              <Pencil className="me-1" /> Editar
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(tarea)}>
              <Trash className="me-1" /> Eliminar
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TareaCard;
