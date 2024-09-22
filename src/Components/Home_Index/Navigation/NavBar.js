import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../NavBarLabels/DashBoards';
import Project from '../NavBarLabels/Projects';
import Ticket from '../NavBarLabels/Tickets';
import Boards from '../NavBarLabels/Boards';
import Plans from '../NavBarLabels/Plans';
import Assets from '../NavBarLabels/Assets';
import AdminUserIcons from './AdminUserIcons';
import './Navigationbar.css'; 

const navLinks = [
  { href: "#dashboard", label: <Dashboard /> },
  { href: "#project", label: <Project /> },
  { href: "#ticket", label: <Ticket /> },
  { href: "#boards", label: <Boards /> },
  { href: "#plans", label: <Plans /> },
  { href: "#assets", label: <Assets /> },
];

const NavigationBar = () => {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className="text-white">Service360</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map((link, index) => (
                <Nav.Link key={index} href={link.href} className="text-white">
                  {link.label}
                </Nav.Link>
              ))}
              <Button className="custom-button">Click Me</Button>
            </Nav>
            <AdminUserIcons />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavigationBar;
