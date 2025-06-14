// src/components/SuccessAlert.jsx
import React from 'react';
import { Alert } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import './SuccessAlert.css'; // Estilos personalizados

const SuccessAlert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <Alert variant="success" className="custom-success-alert d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <CheckCircleFill className="me-2 success-icon" />
        <span>{message}</span>
      </div>
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    </Alert>
  );
};

export default SuccessAlert;
