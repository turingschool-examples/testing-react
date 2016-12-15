import React from 'react'

const Item = ({ title }) => {
  return (
    <div className="grocery-list-item">
      <p> Item Name: {title} <button>destroy</button> </p>
    </div>
  );
};

export default Item
