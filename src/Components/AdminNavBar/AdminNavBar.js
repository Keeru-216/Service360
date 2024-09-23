// src/Components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './AdminNavBar.css'; // Ensure you import the CSS file

const AdminNavBar = ({ onSelect }) => {
  return (
    <>
      <Navbar className="admin-navbar navbar-admin" fixed='top' >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-nav-admin" />
          <Navbar.Collapse id="navbar-nav-admin">
            <Nav className="navbar-nav-admin m-0"> {/* Apply the custom class and remove margins */}
              <Nav.Link onClick={() => onSelect('applications')} className="nav-link-admin">
                Applications
              </Nav.Link>
              <Nav.Link onClick={() => onSelect('projects')} className="nav-link-admin">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => onSelect('issues')} className="nav-link-admin">
                Issues
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavBar;
