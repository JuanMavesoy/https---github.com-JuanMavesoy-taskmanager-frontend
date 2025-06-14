import React from 'react';
 
const DeveloperCard = ({ name, role, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="avatar" />
      <h3>{name}</h3>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};
 
export default DeveloperCard;