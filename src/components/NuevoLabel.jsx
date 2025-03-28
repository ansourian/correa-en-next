import React from 'react';

export default function NuevoLabel({ customStyle = {} }) {
  return (
    <span className="nuevo-label" style={customStyle}>
      NUEVO
    </span>
  );
}
