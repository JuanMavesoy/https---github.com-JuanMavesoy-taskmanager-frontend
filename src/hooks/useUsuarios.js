import { useState, useEffect } from 'react';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} from '../services/userService';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const cargarUsuarios = async () => {
    try {
      const data = await getAllUsers();
      setUsuarios(data);
    } catch (e) {
      setError('No se pudo cargar la lista de usuarios');
    }
  };

  const guardarUsuario = async (usuario) => {
    try {
      if (usuario.id) {
        await updateUser(usuario.id, usuario);
        setSuccessMessage('¡Usuario actualizado con éxito!');
      } else {
        await createUser(usuario);
        setSuccessMessage('¡Usuario registrado con éxito!');
      }
      await cargarUsuarios();
    } catch (err) {
      setSuccessMessage(null);
      setError('Error al guardar el usuario. Verifica los datos.');
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await deleteUser(id);
      setSuccessMessage('¡Usuario eliminado con éxito!');
      await cargarUsuarios();
    } catch (err) {
      setError('Error al eliminar el usuario');
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return {
    usuarios,
    error,
    setError,
    successMessage,
    setSuccessMessage,
    guardarUsuario,
    eliminarUsuario,
  };
};
