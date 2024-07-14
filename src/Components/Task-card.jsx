import React from 'react';
import classNames from 'classnames';

import './task-card.css'; 

const TaskCard = ({ name, description, className }) => {
  return (
    <div className={classNames("task-card", className)}>
      <div className="card-title">{name}</div>
      <p>{description}</p>
    </div>
  );
};

export { TaskCard };