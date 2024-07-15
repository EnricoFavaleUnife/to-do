import React from 'react';
import classNames from 'classnames';

import './task-card.css'; 

const TaskCard = ({ name, className }) => {
  return (
    <div className={classNames("task-card", className)}>
      <button className='circle'></button>
      <div className="card-title">{name}</div>
    </div>
  );
};

export { TaskCard };