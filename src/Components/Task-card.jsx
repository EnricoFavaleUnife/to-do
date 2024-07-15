import React, { useState } from 'react';
import classNames from 'classnames';

import './task-card.css'; 

const TaskCard = ({ name, className }) => {
  const [taskClass, setTaskClass] = useState(className);

  function setDone() {
    setTaskClass('done');
  }

  return (
    <div className={classNames("task-card", taskClass)}>
      <button className='circle' onClick={setDone}></button>
      <div className="card-title">{name}</div>
    </div>
  );
};

export { TaskCard };