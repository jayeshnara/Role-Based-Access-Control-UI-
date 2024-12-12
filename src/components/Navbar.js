import React from'react';
import { Link } from'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/roles">Roles</Link>
        </li>
        <li>
          <Link to="/permissions">Permissions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;