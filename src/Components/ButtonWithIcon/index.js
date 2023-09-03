import React from 'react';

const ButtonWithIcon = ({ icon, label }) => {
  return (
    <button className="icon-button">
      <span className="button-icon">{icon}</span>
      <span className="button-label">{label}</span>
    </button>
  );
};

export default ButtonWithIcon;
