import React from 'react';
import './style.css';

function ListElement({ children }) {
  return (
    <li className="elem">{children}</li>
  );
}

export default ListElement;
