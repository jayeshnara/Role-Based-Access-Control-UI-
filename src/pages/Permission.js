import React from'react';
import Navbar from '../components/Navbar';
import PermissionManagement from '../components/PermissionManagement';

const Permissions = () => {
  return (
    <div>
      <Navbar />
      <h1>Permissions</h1>
      <PermissionManagement />
    </div>
  );
};

export default Permissions;