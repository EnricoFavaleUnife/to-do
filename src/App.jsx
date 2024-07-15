import "./App.css";
import { TaskCard } from "./Components/Task-card";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="title todo">Todo</div>
        <div className="title done">Done</div>

        <TaskCard className="done" name="Create the page" />
        <TaskCard className="done" name="Add button to open popup" />
        <TaskCard className="todo" name="Make the popup work" />
        <TaskCard className="todo" name="Click the circle to set the task as done" />
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

        <button className="submit-task-button">Submit</button>
      </div>

      <button className="open-add-task-popup-button" onClick={openAddTaskPopup} />
    </>
  );
}

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

export default App;
