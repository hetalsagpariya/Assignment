import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Nav defaultActiveKey="/home" className={`flex-column ${isCollapsed ? 'sidebar-collapsed' : ''}`}  >
      <Nav.Link href="/home">Dashboard</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>

    </Nav>
  );
};

export default Sidebar;
