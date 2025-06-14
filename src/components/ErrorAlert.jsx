// src/components/ErrorAlert.jsx
import React from 'react';
import { Alert } from 'react-bootstrap';
import { ExclamationTriangleFill } from 'react-bootstrap-icons';
import './ErrorAlert.css';

const ErrorAlert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <Alert variant="danger" className="custom-error-alert d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <ExclamationTriangleFill className="me-2 error-icon" />
        <span>{message}</span>
      </div>
      <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    </Alert>
  );
};

export default ErrorAlert;
