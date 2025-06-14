import React from 'react';
 
const Features = () => {
  return (
    <div className="features">
      <h2>Usuarios:</h2>
      <ul>
        <li>Alta, modificación, eliminación y búsqueda por nombre o correo.</li>
      </ul>
      <h2>Tareas:</h2>
      <ul>
        <li>Asignación de tareas a usuarios.</li>
        <li>Control de estado (completada, vencida, próxima a vencer).</li>
        <li>Validación de fechas y visualización de responsables.</li>
        <li>Ordenamiento con codificación por colores.</li>
      </ul>
    </div>
  );
};
 
export default Features;