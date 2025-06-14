// src/components/UserModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UserModal = ({ show, handleClose, handleSave, usuarioEditar }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [rolId, setRolId] = useState('');

  // Cargar datos cuando se edita un usuario
 useEffect(() => {
  if (usuarioEditar) {
    setNombre(usuarioEditar.nombre || '');
    setCorreo(usuarioEditar.correo || '');

    const rolMap = { ADMIN: '1', ESCRITOR: '2', LECTOR: '3' };
    setRolId(rolMap[usuarioEditar.rol] || '');
  } else {
    setNombre('');
    setCorreo('');
    setRolId('');
  }
},  [usuarioEditar, show]);


  const onSubmit = () => {
    const datos = {
      nombre,
      correo,
      rolId: parseInt(rolId, 10),
    };

    if (usuarioEditar?.id) {
      datos.id = usuarioEditar.id;
    }

    handleSave(datos);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{usuarioEditar ? 'Editar usuario' : 'Registrar nuevo usuario'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Select value={rolId} onChange={(e) => setRolId(e.target.value)}>
              <option value="">Seleccione un rol</option>
              <option value="1">ADMIN</option>
              <option value="2">ESCRITOR</option>
              <option value="3">LECTOR</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary" onClick={onSubmit}>
          {usuarioEditar ? 'Actualizar' : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;

