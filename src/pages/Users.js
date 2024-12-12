import React from'react';
import Navbar from '../components/Navbar';
import UserManagement from '../components/UserManagement';

const Users = () => {
  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      <UserManagement />
    </div>
  );
};

export default Users;