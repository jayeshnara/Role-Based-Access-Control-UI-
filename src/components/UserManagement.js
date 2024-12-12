import React, { useState, useEffect } from'react';
import { getUsers, createUser, updateUser, deleteUser } from '../api/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(userData).then((data) => setUsers([...users, data]));
  };

  const handleUpdate = (event, userId) => {
    event.preventDefault();
    updateUser(userId, userData).then((data) => setUsers(users.map((user) => (user.id === userId? data : user))));
  };

  const handleDelete = (event, userId) => {
    event.preventDefault();
    deleteUser(userId).then(() => setUsers(users.filter((user) => user.id!== userId)));
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={userData.name} onChange={(event) => setUserData({...userData, name: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={userData.email} onChange={(event) => setUserData({...userData, email: event.target.value })} />
        </label>
        <label>
          Role:
          <select value={userData.role} onChange={(event) => setUserData({...userData, role: event.target.value })}>
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
        </label>
        <button type="submit">Create User</button>
        </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Create</button>
    </div>
  );
};