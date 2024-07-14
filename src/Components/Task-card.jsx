import React from 'react';
import './task-card.css'; 

const TaskCard = ({ name, description }) => {
  return (
    <div className="todo-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export { TaskCard };