// src/services/userService.js
import axios from 'axios';

const USER_API_BASE = '/usuarios/api/usuarios';

export const getAllUsers = async () => {
  const res = await axios.get(USER_API_BASE);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${USER_API_BASE}/${id}`);
  return res.data;
};

export const createUser = async (userData) => {
  const res = await axios.post(USER_API_BASE, userData);
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${USER_API_BASE}/${id}`, userData);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${USER_API_BASE}/${id}`);
  return res.data;
};

export const searchUsers = async (query) => {
  const res = await axios.get(`${USER_API_BASE}/buscar`, { params: { q: query } });
  return res.data;
};
