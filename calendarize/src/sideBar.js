import React from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Sidebar;