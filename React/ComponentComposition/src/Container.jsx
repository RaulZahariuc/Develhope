
import React, { useState } from 'react';
import './Container.css'; 

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="container">
      <div className="containerHeader" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span>{collapsed ? 'Show' : 'Hide'}</span>
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
};

export default Container;

