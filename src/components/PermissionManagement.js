import React, { useState, useEffect } from'react';
import { getPermissions, createPermission, updatePermission, deletePermission } from '../api/api';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [permissionData, setPermissionData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    getPermissions().then((data) => setPermissions(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPermission(permissionData).then((data) => setPermissions([...permissions, data]));
  };

  const handleUpdate = (event, permissionId) => {
    event.preventDefault();
    updatePermission(permissionId, permissionData).then((data) => setPermissions(permissions.map((permission) => (permission.id === permissionId? data : permission))));
  };

  const handleDelete = (event, permissionId) => {
    event.preventDefault();
    deletePermission(permissionId).then(() => setPermissions(permissions.filter((permission) => permission.id!== permissionId)));
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={permissionData.name} onChange={(event) => setPermissionData({...permissionData, name: event.target.value })} />
        </label>
        <label>
          Description:
          <input type="text" value={permissionData.description} onChange={(event) => setPermissionData({...permissionData, description: event.target.value })} />
        </label>
        <button type="submit">Create Permission</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>
                <button onClick={(event) => handleUpdate(event, permission.id)}>Update</button>
                <button onClick={(event) => handleDelete(event, permission.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionManagement;