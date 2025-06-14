// src/hooks/useTareas.js
import { useEffect, useState } from 'react';
import {
  getAllTareas,
  createTarea,
  updateTarea,
  deleteTarea
} from '../services/taskService';
import { getAllUsers } from '../services/userService'; 

export const useTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const tareasData = await getAllTareas();
      const usuariosData = await getAllUsers(); 
      const tareasConUsuarios = tareasData.map(tarea => {
        const usuario = usuariosData.find(u => u.id === tarea.usuarioId);
        return {
          ...tarea,
          usuarioNombre: usuario ? usuario.nombre : 'No asignado'
        };
      });

      setTareas(tareasConUsuarios);
    } catch (e) {
      setError('No se pudo cargar la lista de tareas');
    }
  };

  const guardarTarea = async (tarea) => {
    try {
      if (tarea.id) {
        await updateTarea(tarea.id, tarea);
        setSuccessMessage('¡Tarea actualizada con éxito!');
      } else {
        await createTarea(tarea);
        setSuccessMessage('¡Tarea registrada con éxito!');
      }

      await cargarTareas();
      setError(null);
    } catch (err) {
      setSuccessMessage(null);
      setError('Error al guardar la tarea. Verifica los datos.');
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await deleteTarea(id);
      setSuccessMessage('¡Tarea eliminada con éxito!');
      await cargarTareas();
    } catch (err) {
      setError('Error al eliminar la tarea');
    }
  };

  return {
    tareas,
    error,
    setError,
    successMessage,
    setSuccessMessage,
    guardarTarea,
    eliminarTarea
  };
};
