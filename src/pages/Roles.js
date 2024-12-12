import React from'react';
import Navbar from '../components/Navbar';
import RoleManagement from '../components/RoleManagement';

const Roles = () => {
  return (
    <div>
      <Navbar />
      <h1>Roles</h1>
      <RoleManagement />
    </div>
  );
};

export default Roles;