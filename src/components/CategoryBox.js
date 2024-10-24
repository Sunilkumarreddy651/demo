import React from 'react';
import './CategoryBox.css'; // Import the specific CSS file for CategoryBox

function CategoryBox({ title, details, navigate }) {
  const handleClick = () => {
    navigate(`/details/${title}`, { state: { details } });
  };

  return (
    <div className="category-box" onClick={handleClick}>
      <div className="category-title">{title}</div>
      <button className="toggle-button">Open</button>
    </div>
  );
}

export default CategoryBox;
