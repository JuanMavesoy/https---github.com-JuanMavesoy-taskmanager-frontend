// src/services/taskService.js
import axios from 'axios';

const TASK_API_BASE = '/tareas/api/tareas';

export const getAllTareas = async () => {
  const res = await axios.get(TASK_API_BASE);
  return res.data;
};

export const getTareaById = async (id) => {
  const res = await axios.get(`${TASK_API_BASE}/${id}`);
  return res.data;
};

export const createTarea = async (tareaData) => {
  const res = await axios.post(TASK_API_BASE, tareaData);
  return res.data;
};

export const updateTarea = async (id, tareaData) => {
  const res = await axios.put(`${TASK_API_BASE}/${id}`, tareaData);
  return res.data;
};

export const deleteTarea = async (id) => {
  const res = await axios.delete(`${TASK_API_BASE}/${id}`);
  return res.data;
};

export const searchTareas = async (query) => {
  const res = await axios.get(`${TASK_API_BASE}/buscar`, { params: { q: query } });
  return res.data;
};
