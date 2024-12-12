import React, { useState, useEffect } from'react';
import { getRoles, createRole, updateRole, deleteRole } from '../api/api';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState({
    id: '',
    name: '',
    description: '',
  });
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    description: '',
  });

  useEffect(() => {
    getRoles().then((data) => setRoles(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRole(role).then((data) => setRoles([...roles, data]));
  };

  const handleUpdate = (event, roleId) => {
    event.preventDefault();
    updateRole(roleId, role).then((data) => setRoles(roles.map((role) => (role.id === roleId? data : role))));
  };

  const handleDelete = (event, roleId) => {
    event.preventDefault();
    delete(roleId, role).then((data) => setRoles(roles.filter((role) => role.id!== roleId)));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={role.name} onChange={(event) => setRole({...role, name: event.target.value })} />
        </label>
        <label>
          Description:
          <input type="text" value={role.description} onChange={(event) => setRole({...role, description: event.target.value })} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Create Role
        </button>
      </form>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {roles.map((role) => (
          <tr key={role.id}>
            <td>{role.name}</td>
            <td>{role.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};