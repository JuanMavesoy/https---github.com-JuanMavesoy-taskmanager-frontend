// src/components/TareaFormModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import dayjs from 'dayjs';

const TareaFormModal = ({ show, handleClose, handleSave, tareaEditar, usuarios }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [fechaLimite, setFechaLimite] = useState('');
  const [completada, setCompletada] = useState(false);
  const [usuarioId, setUsuarioId] = useState('');
  const fechaHoy = dayjs().format('YYYY-MM-DD');

    useEffect(() => {
    if (show && !tareaEditar) {
        setTitulo('');
        setDescripcion('');
        setFechaCreacion('');
        setFechaLimite('');
        setCompletada(false);
        setUsuarioId('');
    } else if (tareaEditar) {
        setTitulo(tareaEditar.titulo || '');
        setDescripcion(tareaEditar.descripcion || '');
        setFechaCreacion(tareaEditar.fechaCreacion || '');
        setFechaLimite(tareaEditar.fechaLimite || '');
        setCompletada(tareaEditar.completada || false);
        setUsuarioId(tareaEditar.usuarioId || '');
    }
    }, [show, tareaEditar]);


  const onSubmit = () => {
    const tarea = {
      titulo,
      descripcion,
      fechaCreacion,
      fechaLimite,
      completada,
      usuarioId: parseInt(usuarioId, 10),
    };

    if (tareaEditar?.id) {
      tarea.id = tareaEditar.id;
    }

    handleSave(tarea);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{tareaEditar ? 'Editar tarea' : 'Registrar nueva tarea'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de creación</Form.Label>
            <Form.Control
              type="date"
              min={fechaHoy}
              value={fechaCreacion}
              onChange={(e) => setFechaCreacion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha límite</Form.Label>
            <Form.Control
              type="date"
              min={fechaHoy}
              value={fechaLimite}
              onChange={(e) => setFechaLimite(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Usuario asignado</Form.Label>
            <Form.Select
              value={usuarioId}
              onChange={(e) => setUsuarioId(e.target.value)}
            >
              <option value="">Seleccione un usuario</option>
              {usuarios.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.nombre}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="¿Completada?"
              checked={completada}
              onChange={(e) => setCompletada(e.target.checked)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={onSubmit}>
          {tareaEditar ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TareaFormModal;
