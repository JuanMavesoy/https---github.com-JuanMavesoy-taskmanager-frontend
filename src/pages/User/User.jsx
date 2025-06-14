// src/pages/User/User.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import UserCard from '../../components/UserCard';
import UserModal from '../../components/UserFormModal';
import SuccessAlert from '../../components/SuccessAlert';
import ErrorAlert from '../../components/ErrorAlert';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import { useUsuarios } from '../../hooks/useUsuarios'; 
import useFiltro from '../../hooks/useFiltro';
import useModal from '../../hooks/useModal';
import './user.css';

const Users = () => {
  const {
    usuarios,
    error,
    setError,
    successMessage,
    setSuccessMessage,
    guardarUsuario,
    eliminarUsuario
  } = useUsuarios();

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);

  const { filtro, setFiltro, listaFiltrada: usuariosFiltrados } = useFiltro(usuarios, 'nombre', 'correo');

  const {isOpen: showModal, openModal, closeModal} = useModal();

  const handleEdit = (usuario) => {
    setUsuarioSeleccionado(usuario);
    openModal();
  };

  const handleSave = async (usuario) => {
    await guardarUsuario(usuario);
    closeModal();
    setUsuarioSeleccionado(null);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleDeleteClick = (usuario) => {
    setUsuarioAEliminar(usuario);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    await eliminarUsuario(usuarioAEliminar.id);
    setShowConfirmModal(false);
    setUsuarioAEliminar(null);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Gestión de Usuarios</h2>

      <ErrorAlert message={error} onClose={() => setError(null)} />
      <SuccessAlert message={successMessage} onClose={() => setSuccessMessage(null)} />

      <div className="acciones-container">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre o correo..."
          className="buscador-input"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <Button
          variant="success"
          onClick={() => {
            setUsuarioSeleccionado(null);
            openModal();
          }}
        >
          + Nuevo usuario
        </Button>
      </div>

      <Row>
        {usuariosFiltrados.map((usuario) => (
          <Col key={usuario.id} sm={12} className="mx-auto mb-1">
            <UserCard usuario={usuario} onEdit={handleEdit} onDelete={handleDeleteClick} />
          </Col>
        ))}
      </Row>

      <UserModal
        show={showModal}
        handleClose={() => {
          closeModal();
          setUsuarioSeleccionado(null);
        }}
        handleSave={handleSave}
        usuarioEditar={usuarioSeleccionado}
      />

      <ConfirmDeleteModal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        onConfirm={confirmDelete}
      />
    </Container>
  );
};

export default Users;
