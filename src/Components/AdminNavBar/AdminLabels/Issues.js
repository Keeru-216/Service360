// src/Issues.js
import React, { useState } from 'react';
import './Issues.css'; // For additional styling

const issuesData = [
  { id: 1, type: 'Bug', description: 'An error or flaw in the software.' },
  { id: 2, type: 'Task', description: 'A unit of work to be completed.' },
  { id: 3, type: 'Story', description: 'A feature or requirement from the users perspective.' },
  { id: 4, type: 'Epic', description: 'A large body of work that can be broken down into smaller tasks.' },
];

const Issues = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div className="issues-container">
      <div className="issues-sidebar">
        <h3>Issue Types</h3>
        <ul>
          {issuesData.map(issue => (
            <li
              key={issue.id}
              onClick={() => setSelectedIssue(issue)}
              className={`issue-item ${selectedIssue?.id === issue.id ? 'active' : ''}`}
            >
              {issue.type}
            </li>
          ))}
        </ul>
      </div>
      <div className="issues-details">
        {selectedIssue ? (
          <>
            <h3>{selectedIssue.type}</h3>
            <p>{selectedIssue.description}</p>
          </>
        ) : (
          <p>Please select an issue type to see the details.</p>
        )}
      </div>
    </div>
  );
};

export default Issues;
