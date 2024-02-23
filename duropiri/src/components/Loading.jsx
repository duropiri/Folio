import React from 'react';
import './Loading.css'; // Assuming you have a CSS file for styling

export const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-message">Loading...</div>
    </div>
  );
};
