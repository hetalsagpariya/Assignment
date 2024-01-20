import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Nav defaultActiveKey="/home" className={`flex-column ${isCollapsed ? 'sidebar-collapsed' : ''}`}  >
   
      <Nav.Link as={Link} to="/home">
      Dashboard
        </Nav.Link>
      <Nav.Link as={Link} to="/itemtable">
          Api-ItemTable
        </Nav.Link>

    </Nav>
  );
};

export default Sidebar;
