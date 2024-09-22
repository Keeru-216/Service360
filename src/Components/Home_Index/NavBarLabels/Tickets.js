import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

class Ticket extends Component {
  render() {
    // Array of project options with their corresponding IDs and names
    const projectOptions = [
      { id: 'project1', name: 'Project 1' },
      { id: 'project2', name: 'Project 2' },
      { id: 'project3', name: 'Project 3' },
    ];

    return (
      <div>
        {/* Dropdown menu for selecting projects */}
        <NavDropdown title="Tickets" id="basic-nav-dropdown">
          {/* Map over projectOptions to create dropdown items */}
          {projectOptions.map(project => (
            <NavDropdown.Item key={project.id} href={`#${project.id}`}>
              {project.name} {/* Display the project name */}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </div>
    );
  }
}

export default Ticket;
