import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import SearchBar from '../NavBarLabels/SearchBar';
import './Navigationbar.css'; // Import the CSS file

const AdminUserIcons = () => {
  const adminOptions = [
    { action: 'Settings', label: 'Settings' },
    { action: 'Manage Users', label: 'Manage Users' },
    { action: 'Reports', label: 'Reports' },
  ];

  const userOptions = [
    { action: 'Profile', label: 'Profile' },
    { action: 'Logout', label: 'Logout' },
  ];

  const handleClick = (action) => {
    console.log(`${action} clicked`);
    // Add routing logic or other functionality here
  };

  const renderDropdownItems = (options) =>
    options.map(option => (
      <NavDropdown.Item key={option.action} onClick={() => handleClick(option.action)}>
        {option.label}
      </NavDropdown.Item>
    ));

  return (
    <Nav className="ml-auto nav-icons">
      <SearchBar />

      {/* Announcement Icon */}
      <Nav.Link className="icon-container">
        <i className="bi bi-bell"></i>
      </Nav.Link>

      {/* Question Mark Icon */}
      <Nav.Link className="icon-container">
        <i className="bi bi-question-circle"></i>
      </Nav.Link>

      {/* Admin Dropdown */}
      <NavDropdown
        title={<div className="icon-container"><i className="bi bi-sliders"></i></div>}
        id="admin-dropdown"
        alignLeft
        drop="down"
        className="p-0 icon-dropdown" // Added icon-dropdown class here
        menuAlign="right"
      >
        {renderDropdownItems(adminOptions)}
      </NavDropdown>

      {/* User Dropdown with Profile Icon */}
      <NavDropdown
        title={<div className="profile-icon"><i className="bi bi-person"></i></div>}
        id="user-dropdown"
        alignLeft
        drop="down"
        className="p-0 icon-dropdown" // Added icon-dropdown class here
        flip
      >
        {renderDropdownItems(userOptions)}
      </NavDropdown>
    </Nav>
  );
};

export default AdminUserIcons;
