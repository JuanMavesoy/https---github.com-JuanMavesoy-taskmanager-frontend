// src/pages/Tareas/Tareas.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Pagination } from 'react-bootstrap';
import { useTareas } from '../../hooks/useTareas';
import { useUsuarios } from '../../hooks/useUsuarios';
import useFiltro from '../../hooks/useFiltro';
import useModal from '../../hooks/useModal';
import ErrorAlert from '../../components/ErrorAlert';
import SuccessAlert from '../../components/SuccessAlert';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import TareaCard from '../../components/TareaCard';
import TareaModal from '../../components/TareaFormModal';
import dayjs from 'dayjs';

const Tareas = () => {
  const {
    tareas,
    error,
    setError,
    successMessage,
    setSuccessMessage,
    guardarTarea,
    eliminarTarea
  } = useTareas();

  const { usuarios } = useUsuarios();

  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const [tareaAEliminar, setTareaAEliminar] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { filtro, setFiltro, listaFiltrada } = useFiltro(tareas, 'titulo', 'descripcion');
  const { isOpen: showModal, openModal, closeModal } = useModal();

  // Paginación
  const itemsPorPagina = 5;
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPaginas = Math.ceil(listaFiltrada.length / itemsPorPagina);
  const tareasPaginadas = listaFiltrada.slice(
    (paginaActual - 1) * itemsPorPagina,
    paginaActual * itemsPorPagina
  );

  const handlePageChange = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const handleEdit = (tarea) => {
    setTareaSeleccionada(tarea);
    openModal();
  };

  const handleSave = async (tarea) => {
    await guardarTarea(tarea);
    closeModal();
    setTareaSeleccionada(null);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleDeleteClick = (tarea) => {
    setTareaAEliminar(tarea);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    await eliminarTarea(tareaAEliminar.id);
    setShowConfirmModal(false);
    setTareaAEliminar(null);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Gestión de Tareas</h2>

      <ErrorAlert message={error} onClose={() => setError(null)} />
      <SuccessAlert message={successMessage} onClose={() => setSuccessMessage(null)} />

      <div className="acciones-container">
        <Form.Control
          type="text"
          placeholder="Buscar por título o descripción..."
          className="buscador-input"
          value={filtro}
          onChange={(e) => {
            setFiltro(e.target.value);
            setPaginaActual(1);
          }}
        />
        <Button
          variant="success"
          onClick={() => {
            setTareaSeleccionada(null);
            openModal();
          }}
        >
          + Nueva tarea
        </Button>
      </div>

      <Row>
        {tareasPaginadas.map((tarea) => (
          <Col key={tarea.id} sm={12} className="mx-auto mb-1">
            <TareaCard tarea={tarea} onEdit={handleEdit} onDelete={handleDeleteClick} />
          </Col>
        ))}
      </Row>

      {totalPaginas > 1 && (
        <Pagination className="justify-content-center mt-4">
          {[...Array(totalPaginas)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === paginaActual}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}

      <TareaModal
        show={showModal}
        handleClose={() => {
          closeModal();
          setTareaSeleccionada(null);
        }}
        handleSave={handleSave}
        tareaEditar={tareaSeleccionada}
        usuarios={usuarios}
      />

      <ConfirmDeleteModal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        onConfirm={confirmDelete}
      />
    </Container>
  );
};

export default Tareas;
