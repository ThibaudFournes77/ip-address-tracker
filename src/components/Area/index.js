import React from 'react';
import './style.css';

function Area(props) {
  const { children, className } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Area;
