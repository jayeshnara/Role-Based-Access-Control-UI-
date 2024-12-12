import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const getRoles = async () => {
  const response = await api.get('/roles');
  return response.data;
};

export const getPermissions = async () => {
  const response = await api.get('/permissions');
  return response.data;
};

export const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export const createRole = async (roleData) => {
  const response = await api.post('/roles', roleData);
  return response.data;
};

export const createPermission = async (permissionData) => {
  const response = await api.post('/permissions', permissionData);
  return response.data;
};

export const updateRole = async (roleId, roleData) => {
  const response = await api.put(`/roles/${roleId}`, roleData);
  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};

export const deleteRole = async (roleId) => {
  const response = await api.delete(`/roles/${roleId}`);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};