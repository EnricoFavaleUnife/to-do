import React, { useState } from 'react';
import "./App.css";
import { TaskCard } from "./Components/Task-card";

function App() {

  const [tasks, setTasks] = useState([
    {
      name: "Example of todo task",
      className: "todo"
    },
    {
      name: "Example of done task",
      className: "done"
    }
  ]);

  function openAddTaskPopup() {

    let button = document.querySelector(".open-add-task-popup-button");
    let popup = document.querySelector(".add-task-popup");
  
    if (popup.classList.contains("hidden")) {
      popup.classList.remove("hidden");
      button.style.transform = "rotate(45deg)";
    } else {
      popup.classList.add("hidden");
      button.style.transform = "rotate(0deg)";
    }
  }
  
  function addNewTask() {
    let popup = document.querySelector(".add-task-popup");
    let button = document.querySelector(".open-add-task-popup-button");
  
    let inputTask = document.querySelector("#input-task");
    let taskName = inputTask.value;
  
    inputTask.value = "";
  
    popup.classList.add("hidden");
    button.style.transform = "rotate(0deg)";
  
    if (taskName!== "") {
      console.log(taskName);
      setTasks([
       ...tasks,
        {
          name: taskName,
          className: "todo"
        }
      ]);
    }
  }

  return (
    <>
      <div className="grid-container">
        <div className="title todo">Todo</div>
        <div className="title done">Done</div>

        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            name={task.name}
            className={task.className}
          />
        ))}
      </div>

      <div className="add-task-popup hidden">
        <div className="title">Add new task</div>

        <input
          className="input-task"
          name="input-task"
          id="input-task"
          type="input"
          placeholder="Task name"
        />

        <button className="submit-task-button" onClick={addNewTask} >Submit</button>
      </div>

      <button className="open-add-task-popup-button" onClick={openAddTaskPopup} />
    </>
  );
}

export default App;
